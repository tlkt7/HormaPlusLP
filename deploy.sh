#!/bin/bash

# Horma+ Landing Page Deployment Script
# This script deploys the application to VPS using Docker

echo "🚀 Starting Horma+ deployment..."

# Variables
REPO_URL="https://github.com/tlkt7/HormaPlusLP.git"
APP_DIR="$HOME/horma"
REMOTE_USER="almalinux"
REMOTE_HOST="82.115.43.196"

# Connect to server and deploy
ssh ${REMOTE_USER}@${REMOTE_HOST} << 'ENDSSH'
    echo "📦 Setting up environment..."
    
    # Install Docker if not installed
    if ! command -v docker &> /dev/null; then
        echo "Installing Docker..."
        sudo dnf install -y dnf-plugins-core
        sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
        sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
        sudo systemctl start docker
        sudo systemctl enable docker
        sudo usermod -aG docker $USER
    fi
    
    # Clone or update repository
    if [ -d "$HOME/horma" ]; then
        echo "📥 Updating repository..."
        cd $HOME/horma
        git pull origin main
    else
        echo "📥 Cloning repository..."
        cd $HOME
        git clone https://github.com/tlkt7/HormaPlusLP.git horma
        cd horma
    fi
    
    echo "🐳 Building and starting Docker containers..."
    cd $HOME/horma
    
    # Stop existing containers
    docker compose down 2>/dev/null || true
    
    # Build and start containers
    docker compose up -d --build
    
    echo "✅ Deployment complete!"
    echo "🌐 Your site should be available at: http://82.115.43.196"
    
    # Show container status
    docker compose ps
ENDSSH

echo "✨ Deployment script finished!"
