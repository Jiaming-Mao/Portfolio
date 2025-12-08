#!/bin/bash

# Server Update Script
# This script should be run on the server to update the application

set -e

echo "🔄 Starting server update..."

cd /var/www/portfolio

# Pull latest code
echo "📥 Pulling latest code from GitHub..."
git pull origin main

# Install dependencies (in case package.json changed)
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Restart the application
echo "🔄 Restarting application..."
pm2 restart portfolio

# Show status
echo "✅ Update completed!"
echo ""
echo "📊 Application Status:"
pm2 status
echo ""
echo "📝 Recent logs:"
pm2 logs portfolio --lines 10 --nostream

