# Live Thoughts Setup Script
# Automatically installs dependencies and sets up the keylogger

#!/bin/bash

echo "🧠 Live Thoughts Keylogger Setup"
echo "================================="
echo

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    echo "Please install Python 3 and try again."
    exit 1
fi

echo "✅ Python 3 found"

# Check if pip is installed
if ! command -v pip3 &> /dev/null; then
    echo "❌ pip3 is required but not installed."
    echo "Please install pip3 and try again."
    exit 1
fi

echo "✅ pip3 found"

# Install dependencies
echo "📦 Installing Python dependencies..."
pip3 install -r requirements.txt

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo
echo "🚀 Setup complete!"
echo
echo "To start capturing live thoughts:"
echo "  python3 live_thoughts_capture.py"
echo
echo "Then open your web browser to:"
echo "  https://ram-ibyup8poj-stevebcampbells-projects.vercel.app/live-thoughts"
echo
echo "PRIVACY NOTICE:"
echo "This tool captures keystrokes for personal use only."
echo "Ensure you comply with local laws and privacy regulations."
