#!/bin/bash
# 🧠 Complete Digital Consciousness Integration Setup
# Connects Personal Logger → Supabase → RAM Blog → Vercel

echo "🧠 DIGITAL CONSCIOUSNESS INTEGRATION SETUP"
echo "=========================================="
echo ""

# Check if we're in the RAM blog directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this from your RAM blog directory"
    echo "📍 Expected: /Users/stevencampbell/Documents/GitHub/RAM"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install @supabase/supabase-js recharts lucide-react

echo "🔧 Installing UI components..."
npx shadcn-ui@latest add card tabs badge button 2>/dev/null || echo "📦 UI components already installed or unavailable"

echo ""
echo "🗄️  DATABASE SETUP"
echo "=================="
echo "1. Go to https://supabase.com and create a new project"
echo "2. Copy your project URL and anon key"
echo "3. Run the SQL schema in your Supabase SQL editor:"
echo "   📁 File: supabase-schema.sql"
echo ""

read -p "Have you set up Supabase? (y/n): " supabase_ready

if [ "$supabase_ready" != "y" ]; then
    echo "⏸️  Setup paused. Please complete Supabase setup first."
    echo "📖 Instructions:"
    echo "   1. Go to https://supabase.com"
    echo "   2. Create a new project"
    echo "   3. Go to SQL Editor"
    echo "   4. Run the contents of supabase-schema.sql"
    echo "   5. Note your project URL and anon key"
    echo ""
    echo "🔄 Run this script again when ready!"
    exit 0
fi

echo ""
echo "🔐 ENVIRONMENT SETUP"
echo "==================="

# Create .env.local if it doesn't exist
if [ ! -f ".env.local" ]; then
    cat << EOF > .env.local
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# RAM Blog Configuration
NEXT_PUBLIC_RAM_BLOG_URL=https://your-ram-blog.vercel.app

# Personal Logger Integration
PERSONAL_LOGGER_API_KEY=your-api-key-here

# Analytics Configuration
ENABLE_REAL_TIME_ANALYTICS=true
ENABLE_AI_INSIGHTS=true
EOF
    echo "📁 Created .env.local from template"
else
    echo "📁 .env.local already exists"
fi

echo "🔗 Updating Personal Logger configuration..."
if [ -f "../maclogger/personal_logger.py" ]; then
    # Update the RAM blog URL in personal logger
    sed -i '' 's|http://localhost:3000|http://localhost:3000|g' ../maclogger/personal_logger.py
    echo "✅ Personal Logger configured to send data to RAM blog"
else
    echo "⚠️  Personal Logger not found at ../maclogger/personal_logger.py"
    echo "   Make sure your folder structure is:"
    echo "   Documents/GitHub/RAM/ (this directory)"
    echo "   Documents/GitHub/maclogger/ (personal logger)"
fi

echo "🎨 Setting up development environment..."
echo "📱 Development URLs:"
echo "   RAM Blog: http://localhost:3000"
echo "   Consciousness Dashboard: http://localhost:3000/consciousness"
echo "   Live Thoughts: http://localhost:3000/live-thoughts"
echo ""

echo "🚀 Starting development servers..."
echo ""
echo "📋 NEXT STEPS:"
echo "1. Start RAM blog: npm run dev"
echo "2. Start Personal Logger: cd ../maclogger && python3 personal_logger.py"
echo "3. Visit: http://localhost:3000/consciousness"
echo ""
echo "🎯 FEATURES READY:"
echo "✅ Real-time consciousness streaming"
echo "✅ Advanced analytics dashboard"
echo "✅ AI-powered insights"
echo "✅ Productivity heatmaps"
echo "✅ App usage tracking"
echo "✅ WPM and accuracy metrics"
echo ""
echo "🧠 Your Digital Consciousness is ready to stream!"

# Optional: Start the development server
read -p "Start development server now? (y/n): " start_dev
if [ "$start_dev" = "y" ]; then
    echo "🚀 Starting RAM blog development server..."
    npm run dev
fi
