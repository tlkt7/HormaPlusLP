#!/bin/bash

# Simple SSL Setup for hormaplus.com

echo "### Stopping containers..."
docker compose down

echo "### Starting services..."
docker compose up -d

echo "### Waiting for nginx to be ready..."
sleep 5

echo "### Requesting SSL certificate..."
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email support@hormaplus.com \
  --agree-tos \
  --no-eff-email \
  -d hormaplus.com \
  -d www.hormaplus.com

if [ $? -eq 0 ]; then
    echo "### Certificate obtained successfully!"
    echo "### Now updating nginx configuration for HTTPS..."
    
    # Update nginx config to enable HTTPS
    cat > ./frontend/nginx-ssl.conf << 'EOF'
server {
    listen 80;
    server_name hormaplus.com www.hormaplus.com 82.115.43.196;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    server_name hormaplus.com www.hormaplus.com;
    
    ssl_certificate /etc/letsencrypt/live/hormaplus.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/hormaplus.com/privkey.pem;
    
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://backend:8000/api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF
    
    cp ./frontend/nginx-ssl.conf ./frontend/nginx.conf
    
    echo "### Rebuilding frontend with SSL config..."
    docker compose up -d --build frontend
    
    echo "### SSL setup complete!"
    echo "### Your site is now available at https://hormaplus.com"
else
    echo "### Certificate request failed. Please check the errors above."
fi
