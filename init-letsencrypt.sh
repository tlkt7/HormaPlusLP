#!/bin/bash

# SSL Setup Script for hormaplus.com
# This script obtains SSL certificate from Let's Encrypt

domains=(hormaplus.com www.hormaplus.com)
email="support@hormaplus.com" # Change this to your email
staging=0 # Set to 1 for testing, 0 for production

echo "### Setting up SSL certificate for hormaplus.com..."

# Download recommended TLS parameters
if [ ! -e "./ssl-dhparams.pem" ]; then
  echo "### Downloading recommended TLS parameters..."
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "./options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "./ssl-dhparams.pem"
fi

echo "### Creating dummy certificate for nginx to start..."
path="/etc/letsencrypt/live/hormaplus.com"
mkdir -p "$path"
docker compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:4096 -days 1\
    -keyout '$path/privkey.pem' \
    -out '$path/fullchain.pem' \
    -subj '/CN=localhost'" certbot

echo "### Starting nginx..."
docker compose up -d frontend

echo "### Deleting dummy certificate..."
docker compose run --rm --entrypoint "\
  rm -rf /etc/letsencrypt/live/hormaplus.com && \
  rm -rf /etc/letsencrypt/archive/hormaplus.com && \
  rm -rf /etc/letsencrypt/renewal/hormaplus.com.conf" certbot

echo "### Requesting Let's Encrypt certificate..."
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Select appropriate email arg
case "$email" in
  "") email_arg="--register-unsafely-without-email" ;;
  *) email_arg="--email $email" ;;
esac

# Enable staging mode if needed
if [ $staging != "0" ]; then staging_arg="--staging"; fi

docker compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size 4096 \
    --agree-tos \
    --force-renewal" certbot

echo "### Reloading nginx..."
docker compose exec frontend nginx -s reload

echo "### SSL certificate installed successfully!"
echo "### Your site is now available at https://hormaplus.com"
