#!/bin/bash

# DOJO Tampa Website Setup Script

echo "🥋 Setting up DOJO Tampa Website..."
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js found: $(node -v)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create .env file from template if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please update .env with your actual configuration values"
fi

# Create necessary directories
echo ""
echo "📁 Creating directory structure..."
mkdir -p public/images/{events,blog,partners}
mkdir -p src/content/blog

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env with your configuration"
echo "2. Run 'npm run dev' to start development server"
echo "3. Visit http://localhost:4321"
echo ""
echo "For deployment:"
echo "1. Push to GitHub"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Your site will be live at your GitHub Pages URL"
