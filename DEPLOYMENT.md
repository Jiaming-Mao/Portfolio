# Deployment Guide for Aliyun

This guide covers deploying your Next.js portfolio to Aliyun (Alibaba Cloud).

## Option 1: Deploy to Aliyun ECS (Recommended)

### Prerequisites
- Aliyun account with real-name verification
- Domain name (optional but recommended)

### Step 1: Create ECS Instance

1. Log in to [Aliyun Console](https://ecs.console.aliyun.com)
2. Click "Create Instance"
3. Configure:
   - **Region**: Choose closest to your target audience
   - **Instance Type**: 
     - Minimum: `ecs.t6-c1m2.large` (2 vCPU, 4GB RAM)
     - Recommended: `ecs.c6.large` (2 vCPU, 4GB RAM) for better performance
   - **Image**: Ubuntu 22.04 LTS or CentOS 7/8
   - **Network**: VPC
   - **Security Group**: 
     - Allow port 22 (SSH)
     - Allow port 80 (HTTP)
     - Allow port 443 (HTTPS)
   - **Login Method**: Password or SSH Key Pair
4. Complete purchase and wait for instance to start

### Step 2: Connect to ECS Instance

```bash
ssh root@<your-ecs-public-ip>
```

### Step 3: Install Required Software

#### Install Node.js (using NVM - recommended)

```bash
# Update system
apt update && apt upgrade -y  # Ubuntu/Debian
# or
yum update -y  # CentOS

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Install Node.js 18 LTS
nvm install 18
nvm use 18
nvm alias default 18

# Verify installation
node --version
npm --version
```

#### Install PM2 (Process Manager)

```bash
npm install -g pm2
```

#### Install Nginx

```bash
# Ubuntu/Debian
apt install nginx -y

# CentOS
yum install nginx -y

# Start and enable Nginx
systemctl start nginx
systemctl enable nginx
```

### Step 4: Deploy Your Application

#### Option A: Deploy via Git (Recommended)

```bash
# Install Git
apt install git -y  # Ubuntu/Debian
# or
yum install git -y  # CentOS

# Clone your repository
cd /var/www
git clone <your-repo-url> portfolio
cd portfolio

# Install dependencies
npm install

# Build the application
npm run build
```

#### Option B: Deploy via SCP (from local machine)

```bash
# On your local machine, build first
npm run build

# Create deployment package (excluding node_modules)
tar -czf portfolio.tar.gz --exclude='node_modules' --exclude='.git' --exclude='.next' .

# Transfer to ECS
scp portfolio.tar.gz root@<your-ecs-ip>:/var/www/

# On ECS server
cd /var/www
tar -xzf portfolio.tar.gz
npm install --production
npm run build
```

### Step 5: Configure PM2

```bash
cd /var/www/portfolio

# Start application with PM2
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the instructions shown
```

### Step 6: Configure Nginx

Create Nginx configuration file:

```bash
nano /etc/nginx/sites-available/portfolio
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

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
```

Enable the site:

```bash
# Ubuntu/Debian
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

# CentOS (sites-available may not exist)
# Just edit /etc/nginx/nginx.conf directly or create the file in /etc/nginx/conf.d/
cp /etc/nginx/sites-available/portfolio /etc/nginx/conf.d/portfolio.conf
nginx -t
systemctl reload nginx
```

### Step 7: Setup SSL Certificate (HTTPS)

Install Certbot:

```bash
# Ubuntu/Debian
apt install certbot python3-certbot-nginx -y

# CentOS
yum install certbot python3-certbot-nginx -y
```

Obtain SSL certificate:

```bash
certbot --nginx -d your-domain.com -d www.your-domain.com
```

Certbot will automatically configure Nginx for HTTPS. Certificates auto-renew.

### Step 8: Configure Domain DNS

1. Log in to [Aliyun Domain Console](https://dc.console.aliyun.com)
2. Find your domain and click "DNS Settings"
3. Add A record:
   - **Host**: @ (or www for subdomain)
   - **Type**: A
   - **Value**: Your ECS public IP address
   - **TTL**: 600 (10 minutes)
4. Wait for DNS propagation (can take up to 48 hours, usually faster)

### Step 9: Configure Firewall

```bash
# Ubuntu/Debian (UFW)
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable

# CentOS (firewalld)
firewall-cmd --permanent --add-service=ssh
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```

### Step 10: Verify Deployment

1. Visit `http://your-domain.com` or `http://<your-ecs-ip>`
2. Check PM2 status: `pm2 status`
3. Check application logs: `pm2 logs portfolio`
4. Check Nginx logs: `tail -f /var/log/nginx/error.log`

## Option 2: Deploy to Aliyun Function Compute (Serverless)

### Prerequisites
- Aliyun account
- Aliyun CLI installed

### Step 1: Install Aliyun CLI

```bash
# Install Aliyun CLI
npm install -g @alicloud/fun

# Configure credentials
fun config
```

### Step 2: Configure for Function Compute

Create `template.yml` in project root:

```yaml
ROSTemplateFormatVersion: '2015-09-01'
Transform: 'Aliyun::Serverless-2018-04-03'
Resources:
  portfolio:
    Type: 'Aliyun::Serverless::Service'
    Properties:
      Description: 'Portfolio Website'
    nextjs-app:
      Type: 'Aliyun::Serverless::Function'
      Properties:
        Description: 'Next.js Portfolio'
        CodeUri: './'
        Handler: 'index.handler'
        Runtime: nodejs18
        Timeout: 60
        MemorySize: 1024
        EnvironmentVariables:
          NODE_ENV: production
      Events:
        httpTrigger:
          Type: HTTP
          Properties:
            AuthType: ANONYMOUS
            Methods: ['GET', 'POST']
```

### Step 3: Deploy

```bash
# Build the application
npm run build

# Deploy to Function Compute
fun deploy
```

## Option 3: Deploy to Aliyun Container Service (Docker)

### Step 1: Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

### Step 2: Build and Push Docker Image

```bash
# Build Docker image
docker build -t portfolio:latest .

# Tag for Aliyun Container Registry
docker tag portfolio:latest registry.cn-hangzhou.aliyuncs.com/<namespace>/portfolio:latest

# Login to Aliyun Container Registry
docker login --username=<your-username> registry.cn-hangzhou.aliyuncs.com

# Push image
docker push registry.cn-hangzhou.aliyuncs.com/<namespace>/portfolio:latest
```

### Step 3: Deploy to Container Service

1. Create Container Service cluster in Aliyun Console
2. Create deployment using the pushed image
3. Configure service and ingress

## Useful Commands

### PM2 Management

```bash
pm2 status              # Check status
pm2 logs portfolio      # View logs
pm2 restart portfolio   # Restart app
pm2 stop portfolio      # Stop app
pm2 delete portfolio    # Remove app
```

### Nginx Management

```bash
nginx -t                # Test configuration
systemctl reload nginx  # Reload configuration
systemctl restart nginx # Restart Nginx
systemctl status nginx  # Check status
```

### Application Updates

```bash
cd /var/www/portfolio
git pull                # If using Git
npm install
npm run build
pm2 restart portfolio
```

## Troubleshooting

### Application won't start
- Check PM2 logs: `pm2 logs portfolio`
- Verify Node.js version: `node --version`
- Check if port 3000 is in use: `netstat -tulpn | grep 3000`

### 502 Bad Gateway
- Verify Next.js app is running: `pm2 status`
- Check Nginx proxy configuration
- Verify firewall rules

### SSL Certificate Issues
- Ensure domain DNS points to ECS IP
- Check if ports 80 and 443 are open
- Verify Certbot configuration: `certbot certificates`

## Cost Optimization Tips

1. **Use Aliyun Reserved Instances**: Save up to 50% on ECS costs
2. **Enable Auto Scaling**: Scale down during low traffic
3. **Use Aliyun CDN**: Cache static assets for faster loading
4. **Monitor Usage**: Set up billing alerts in Aliyun Console

## Security Best Practices

1. **Keep system updated**: `apt update && apt upgrade` regularly
2. **Use SSH keys** instead of passwords
3. **Configure fail2ban** to prevent brute force attacks
4. **Regular backups**: Use Aliyun Snapshot service
5. **Monitor logs**: Set up Aliyun CloudMonitor alerts

## Additional Resources

- [Aliyun ECS Documentation](https://www.alibabacloud.com/help/en/ecs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/usage/quick-start/)

