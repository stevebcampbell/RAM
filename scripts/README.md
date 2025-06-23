# Live Thoughts Keylogger

Real-time capture and streaming of your thought processes directly to your web browser.

## 🧠 What is this?

This is a revolutionary system that captures your keystrokes in real-time and streams them to a beautiful web interface, providing:

- **Live thought stream** as you type across any application
- **AI-generated summaries** every 5 minutes
- **Thought analytics** including WPM, activity patterns, and productivity metrics
- **Full transparency** into your cognitive processes

## 🚀 Quick Start

1. **Setup the keylogger:**

   ```bash
   cd scripts
   ./setup.sh
   ```

2. **Start capturing:**

   ```bash
   python3 live_thoughts_capture.py
   ```

3. **Open the web interface:**
   - Visit: https://ram-ibyup8poj-stevebcampbells-projects.vercel.app/live-thoughts
   - Or run locally and go to: http://localhost:3000/live-thoughts

## 📋 Requirements

- Python 3.7+
- pip3
- macOS/Linux/Windows (cross-platform)

## 🔧 Manual Installation

If the setup script doesn't work:

```bash
pip3 install pynput websockets psutil
python3 live_thoughts_capture.py
```

## 🎯 Features

### Real-time Capture

- Captures keystrokes from any application
- Shows application context and timestamps
- Live streaming to web interface

### AI Summaries

- Automatic insights every 5 minutes
- Key insights extraction
- Emotional tone analysis
- Productivity scoring

### Analytics Dashboard

- Total keystrokes and WPM
- Active time tracking
- Thought burst detection
- Pattern analysis

## 🔐 Privacy & Security

**IMPORTANT**: This keylogger is designed for personal use only:

- All data stays on your local machine
- No data is sent to external servers (except your own web interface)
- Use responsibly and ensure compliance with local laws
- Only run on devices you own
- Be mindful of sensitive information

## 🛠 Technical Details

### Architecture

- **Python keylogger** (pynput) captures keystrokes
- **WebSocket server** streams data in real-time
- **React web interface** displays live thoughts
- **AI integration** for summarization (planned)

### Data Flow

1. Keylogger captures keystrokes
2. Data is buffered and processed
3. WebSocket streams to web interface
4. AI generates periodic summaries
5. Analytics are calculated in real-time

## 🔄 Roadmap

- [x] Web interface with live stream display
- [x] Python keylogger with WebSocket streaming
- [ ] AI integration for real-time summarization
- [ ] Cross-platform desktop app
- [ ] Advanced privacy controls
- [ ] Thought pattern machine learning
- [ ] Export capabilities

## 🤝 Contributing

This is a personal project, but ideas and feedback are welcome!

## ⚠️ Legal Disclaimer

This software is provided for educational and personal use only. Users are responsible for:

- Obtaining proper permissions before using
- Complying with local laws and regulations
- Respecting privacy rights
- Using the software ethically and responsibly

The authors assume no responsibility for misuse of this software.
