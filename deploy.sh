#!/bin/bash

# Next.js Portfolio Deployment Script for Aliyun ECS
# This script should be run on the server

set -e  # Exit on error

echo "🚀 Starting deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check Node.js
echo -e "${YELLOW}📦 Checking Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo "Node.js not found. Installing NVM and Node.js 18..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install 18
    nvm use 18
    nvm alias default 18
else
    echo -e "${GREEN}✓ Node.js is installed: $(node --version)${NC}"
fi

# Step 2: Check Git
echo -e "${YELLOW}📦 Checking Git...${NC}"
if ! command -v git &> /dev/null; then
    echo "Installing Git..."
    apt install git -y
else
    echo -e "${GREEN}✓ Git is installed: $(git --version)${NC}"
fi

# Step 3: Check PM2
echo -e "${YELLOW}📦 Checking PM2...${NC}"
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
else
    echo -e "${GREEN}✓ PM2 is installed${NC}"
fi

# Step 4: Create project directory
echo -e "${YELLOW}📁 Setting up project directory...${NC}"
mkdir -p /var/www
cd /var/www

# Step 5: Clone or update repository
if [ -d "portfolio" ]; then
    echo -e "${YELLOW}📥 Updating existing repository...${NC}"
    cd portfolio
    git pull origin main
else
    echo -e "${YELLOW}📥 Cloning repository...${NC}"
    git clone https://github.com/Jiaming-Mao/Portfolio.git portfolio
    cd portfolio
fi

# Step 6: Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Step 7: Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

# Step 8: Stop existing PM2 process if running
echo -e "${YELLOW}🛑 Stopping existing PM2 process...${NC}"
pm2 stop portfolio 2>/dev/null || true
pm2 delete portfolio 2>/dev/null || true

# Step 9: Start application with PM2
echo -e "${YELLOW}▶️  Starting application with PM2...${NC}"
pm2 start npm --name "portfolio" -- start
pm2 save

# Step 10: Setup PM2 startup (if not already done)
echo -e "${YELLOW}⚙️  Setting up PM2 startup...${NC}"
pm2 startup | grep -v PM2 || true

# Step 11: Configure Nginx
echo -e "${YELLOW}🌐 Configuring Nginx...${NC}"
cat > /etc/nginx/sites-available/portfolio << 'EOF'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Remove default site if exists
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Reload Nginx
systemctl reload nginx

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo "📊 Application Status:"
pm2 status
echo ""
echo "🌐 Your site should be available at: http://$(curl -s ifconfig.me)"
echo ""
echo "📝 Useful commands:"
echo "  - View logs: pm2 logs portfolio"
echo "  - Restart app: pm2 restart portfolio"
echo "  - Check status: pm2 status"

