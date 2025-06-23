#!/usr/bin/env python3
"""
RandomAccessMind Live Thoughts Capture System
Real-time keystroke capture, context analysis, and streaming to 3D brain visualization

PRIVACY NOTE: This keylogger is designed for personal use only.
Ensure you have proper permissions and comply with local laws.
Only captures when you explicitly start it via the web interface.
"""

import json
import time
import threading
import asyncio
import websockets
import re
import nltk
from datetime import datetime
from pynput import keyboard
from pynput.keyboard import Key
import psutil
import sys
from collections import defaultdict, deque
import subprocess
import os

# Download required NLTK data
try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')

try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

class ThoughtCaptureSystem:
    def __init__(self):
        self.is_capturing = False
        self.current_text = ""
        self.text_buffer = deque(maxlen=1000)  # Rolling buffer of recent text
        self.connected_clients = set()
        self.keystroke_count = 0
        self.session_start = None
        self.current_app = ""
        self.context_keywords = {
            'ai': ['ai', 'artificial', 'intelligence', 'machine', 'learning', 'neural', 'gpt', 'model'],
            'frameworks': ['framework', 'methodology', 'system', 'process', 'logic', 'approach'],
            'development': ['code', 'function', 'variable', 'programming', 'debug', 'commit', 'git'],
            'thoughts': ['think', 'idea', 'concept', 'notion', 'thought', 'insight', 'realize'],
            'writing': ['write', 'article', 'blog', 'content', 'text', 'paragraph', 'sentence'],
            'planning': ['plan', 'schedule', 'organize', 'todo', 'task', 'goal', 'objective'],
            'research': ['research', 'study', 'analyze', 'investigate', 'explore', 'examine'],
            'communication': ['email', 'message', 'chat', 'communicate', 'discuss', 'talk']
        }
        self.stop_words = set(stopwords.words('english'))

    def get_active_application(self):
        """Get the currently active application"""
        try:
            if sys.platform == "darwin":  # macOS
                script = '''
                tell application "System Events"
                    name of first application process whose frontmost is true
                end tell
                '''
                result = subprocess.run(['osascript', '-e', script],
                                      capture_output=True, text=True)
                return result.stdout.strip()
            elif sys.platform == "win32":  # Windows
                import win32gui
                window = win32gui.GetForegroundWindow()
                return win32gui.GetWindowText(window)
            else:  # Linux
                return "Unknown"
        except Exception:
            return "Unknown"

    def analyze_context(self, text):
        """Analyze text to determine context/category"""
        if not text or len(text) < 10:
            return "typing"

        # Tokenize and clean text
        words = word_tokenize(text.lower())
        words = [w for w in words if w.isalpha() and w not in self.stop_words]

        # Count category matches
        category_scores = defaultdict(int)
        for category, keywords in self.context_keywords.items():
            for word in words:
                if any(keyword in word or word in keyword for keyword in keywords):
                    category_scores[category] += 1

        # Return highest scoring category or default
        if category_scores:
            return max(category_scores, key=category_scores.get)
        return "general"

    def classify_thought_type(self, text):
        """Classify the type of thought based on patterns"""
        text_lower = text.lower()

        if any(word in text_lower for word in ['?', 'how', 'why', 'what', 'when', 'where']):
            return "question"
        elif any(word in text_lower for word in ['!', 'great', 'awesome', 'amazing', 'brilliant']):
            return "excitement"
        elif any(word in text_lower for word in ['todo', 'need to', 'should', 'must', 'have to']):
            return "planning"
        elif any(word in text_lower for word in ['import', 'function', 'class', 'def', 'var', 'const']):
            return "coding"
        elif len(text) > 100:
            return "writing"
        else:
            return "thinking"

    def extract_insights(self, text):
        """Extract key insights and metadata from text"""
        word_count = len(text.split())
        char_count = len(text)

        # Calculate typing speed (rough estimate)
        typing_speed = min(100, max(10, word_count * 2)) if word_count > 0 else 0

        # Detect urgency/intensity
        urgency = min(1.0, text.count('!') * 0.3 + text.count('?') * 0.2 +
                     len([w for w in text.split() if w.isupper()]) * 0.1)

        return {
            'word_count': word_count,
            'char_count': char_count,
            'typing_speed': typing_speed,
            'urgency': urgency,
            'complexity': min(1.0, word_count / 50)  # 0-1 scale
        }

    def create_thought_packet(self, text, app_name):
        """Create a complete thought data packet"""
        context = self.analyze_context(text)
        thought_type = self.classify_thought_type(text)
        insights = self.extract_insights(text)

        return {
            'id': f"thought_{int(time.time() * 1000)}",
            'timestamp': datetime.now().isoformat(),
            'rawText': text,
            'application': app_name,
            'context': context,
            'thoughtType': thought_type,
            'insights': insights,
            'keystrokeCount': self.keystroke_count,
            'sessionDuration': time.time() - self.session_start if self.session_start else 0
        }

    async def broadcast_to_clients(self, data):
        """Send data to all connected WebSocket clients"""
        if self.connected_clients:
            # Create JSON message
            message = json.dumps(data)
            # Send to all clients
            disconnected = set()
            for client in self.connected_clients:
                try:
                    await client.send(message)
                except websockets.exceptions.ConnectionClosed:
                    disconnected.add(client)

            # Remove disconnected clients
            self.connected_clients -= disconnected

    def on_key_press(self, key):
        """Handle key press events"""
        if not self.is_capturing:
            return

        self.keystroke_count += 1

        try:
            # Handle regular character keys
            if hasattr(key, 'char') and key.char:
                self.current_text += key.char

            # Handle special keys
            elif key == Key.space:
                self.current_text += " "
            elif key == Key.enter:
                self.current_text += "\n"
            elif key == Key.tab:
                self.current_text += "\t"
            elif key == Key.backspace:
                if self.current_text:
                    self.current_text = self.current_text[:-1]

            # Process text in chunks for real-time streaming
            if len(self.current_text) >= 50 or key == Key.enter:
                self.process_text_chunk()

        except Exception as e:
            print(f"Key processing error: {e}")

    def process_text_chunk(self):
        """Process accumulated text and send to clients"""
        if not self.current_text.strip():
            return

        # Get current application
        app_name = self.get_active_application()

        # Create thought packet
        thought_data = self.create_thought_packet(self.current_text, app_name)

        # Add to buffer
        self.text_buffer.append(thought_data)

        # Send to clients asynchronously
        asyncio.create_task(self.broadcast_to_clients({
            'type': 'thought_stream',
            'data': thought_data
        }))

        # Clear current text but keep last few words for context
        words = self.current_text.split()
        if len(words) > 3:
            self.current_text = " ".join(words[-3:]) + " "
        else:
            self.current_text = ""

    async def handle_websocket(self, websocket, path):
        """Handle WebSocket connections from the web interface"""
        print(f"New client connected: {websocket.remote_address}")
        self.connected_clients.add(websocket)

        try:
            # Send initial status
            await websocket.send(json.dumps({
                'type': 'status',
                'data': {
                    'isCapturing': self.is_capturing,
                    'keystrokeCount': self.keystroke_count,
                    'sessionDuration': time.time() - self.session_start if self.session_start else 0
                }
            }))

            # Handle incoming messages
            async for message in websocket:
                try:
                    data = json.loads(message)
                    await self.handle_command(data)
                except json.JSONDecodeError:
                    print(f"Invalid JSON received: {message}")

        except websockets.exceptions.ConnectionClosed:
            print(f"Client disconnected: {websocket.remote_address}")
        finally:
            self.connected_clients.discard(websocket)

    async def handle_command(self, data):
        """Handle commands from the web interface"""
        command = data.get('command')

        if command == 'start_capture':
            self.start_capture()
        elif command == 'stop_capture':
            self.stop_capture()
        elif command == 'get_recent_thoughts':
            # Send recent thoughts buffer
            await self.broadcast_to_clients({
                'type': 'recent_thoughts',
                'data': list(self.text_buffer)
            })

    def start_capture(self):
        """Start keystroke capture"""
        if not self.is_capturing:
            self.is_capturing = True
            self.session_start = time.time()
            self.keystroke_count = 0
            print("🧠 Live Thoughts capture started!")

            # Start keyboard listener
            self.keyboard_listener = keyboard.Listener(on_press=self.on_key_press)
            self.keyboard_listener.start()

            # Broadcast status update
            asyncio.create_task(self.broadcast_to_clients({
                'type': 'capture_started',
                'data': {'timestamp': datetime.now().isoformat()}
            }))

    def stop_capture(self):
        """Stop keystroke capture"""
        if self.is_capturing:
            self.is_capturing = False
            if hasattr(self, 'keyboard_listener'):
                self.keyboard_listener.stop()
            print("🛑 Live Thoughts capture stopped!")

            # Broadcast status update
            asyncio.create_task(self.broadcast_to_clients({
                'type': 'capture_stopped',
                'data': {'timestamp': datetime.now().isoformat()}
            }))

    async def start_server(self, host='localhost', port=8765):
        """Start the WebSocket server"""
        print(f"🚀 RandomAccessMind Thought Capture Server starting on {host}:{port}")
        print("🔒 Privacy: Only captures when explicitly started via web interface")
        print("🧠 Ready to stream thoughts to 3D brain visualization!")

        async with websockets.serve(self.handle_websocket, host, port):
            await asyncio.Future()  # Run forever

# Main execution
if __name__ == "__main__":
    # Create thought capture system
    thought_system = ThoughtCaptureSystem()

    try:
        # Start the WebSocket server
        asyncio.run(thought_system.start_server())
    except KeyboardInterrupt:
        print("\n🛑 Shutting down thought capture system...")
        thought_system.stop_capture()
        sys.exit(0)
    except Exception as e:
        print(f"❌ Error: {e}")
        sys.exit(1)

class LiveThoughtsCapture:
    def __init__(self, websocket_uri="ws://localhost:8080"):
        self.websocket_uri = websocket_uri
        self.current_text = ""
        self.current_app = ""
        self.is_capturing = False
        self.websocket = None
        self.buffer = []
        self.last_summary_time = time.time()
        self.summary_interval = 300  # 5 minutes

    def get_active_application(self):
        """Get the name of the currently active application"""
        try:
            # This is a simplified version - would need platform-specific implementation
            return "Unknown App"
        except:
            return "Unknown App"

    def on_press(self, key):
        """Handle key press events"""
        if not self.is_capturing:
            return

        current_time = datetime.now()

        try:
            # Handle regular characters
            if hasattr(key, 'char') and key.char is not None:
                self.current_text += key.char

            # Handle special keys
            elif key == Key.space:
                self.current_text += " "
            elif key == Key.enter:
                self.process_thought_line()
                self.current_text = ""
            elif key == Key.backspace:
                if self.current_text:
                    self.current_text = self.current_text[:-1]
            elif key == Key.tab:
                self.current_text += "\t"

        except Exception as e:
            print(f"Error processing key: {e}")

    def process_thought_line(self):
        """Process a complete line of thought"""
        if not self.current_text.strip():
            return

        thought_data = {
            "id": f"thought_{int(time.time() * 1000)}",
            "timestamp": datetime.now().isoformat(),
            "rawText": self.current_text.strip(),
            "application": self.get_active_application(),
            "context": "Live Capture",
            "type": "keystroke"
        }

        self.buffer.append(thought_data)

        # Send to websocket if connected
        if self.websocket:
            asyncio.create_task(self.send_thought(thought_data))

        print(f"[{thought_data['timestamp']}] {thought_data['rawText']}")

        # Check if it's time for a summary
        current_time = time.time()
        if current_time - self.last_summary_time > self.summary_interval:
            self.generate_summary()
            self.last_summary_time = current_time

    async def send_thought(self, thought_data):
        """Send thought data via websocket"""
        try:
            await self.websocket.send(json.dumps(thought_data))
        except Exception as e:
            print(f"Error sending data: {e}")

    def generate_summary(self):
        """Generate AI summary of recent thoughts"""
        if not self.buffer:
            return

        # This is a simplified summary - would integrate with AI API
        summary_data = {
            "id": f"summary_{int(time.time())}",
            "startTime": self.buffer[0]["timestamp"] if self.buffer else datetime.now().isoformat(),
            "endTime": datetime.now().isoformat(),
            "thoughtCount": len(self.buffer),
            "summary": f"Captured {len(self.buffer)} thoughts in the last {self.summary_interval/60} minutes",
            "type": "summary"
        }

        if self.websocket:
            asyncio.create_task(self.send_thought(summary_data))

        print(f"[SUMMARY] {summary_data['summary']}")
        self.buffer = []  # Clear buffer after summary

    async def websocket_handler(self, websocket, path):
        """Handle websocket connections"""
        self.websocket = websocket
        print("Web interface connected!")

        try:
            await websocket.wait_closed()
        except:
            pass
        finally:
            self.websocket = None
            print("Web interface disconnected")

    def start_websocket_server(self):
        """Start the websocket server"""
        async def server():
            print("Starting websocket server on ws://localhost:8080")
            await websockets.serve(self.websocket_handler, "localhost", 8080)

        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        loop.run_until_complete(server())
        loop.run_forever()

    def start_capture(self):
        """Start capturing keystrokes"""
        print("Starting Live Thoughts capture...")
        print("Press Ctrl+C to stop")

        # Start websocket server in a separate thread
        websocket_thread = threading.Thread(target=self.start_websocket_server)
        websocket_thread.daemon = True
        websocket_thread.start()

        self.is_capturing = True

        # Start keyboard listener
        with keyboard.Listener(on_press=self.on_press) as listener:
            try:
                listener.join()
            except KeyboardInterrupt:
                print("\nStopping capture...")
                self.is_capturing = False

def main():
    print("Live Thoughts Keylogger")
    print("======================")
    print()
    print("PRIVACY NOTICE:")
    print("This tool captures keystrokes for personal thought logging.")
    print("Ensure you have proper permissions and comply with local laws.")
    print()

    response = input("Do you want to proceed? (y/N): ")
    if response.lower() != 'y':
        print("Exiting...")
        return

    capture = LiveThoughtsCapture()
    capture.start_capture()

if __name__ == "__main__":
    main()
