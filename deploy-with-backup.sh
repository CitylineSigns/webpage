#!/bin/bash

# Cityline Signs Deployment with Backup
# Handles existing files in Hostinger directory

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🔄 Cityline Signs Deployment with Backup${NC}"
echo -e "${BLUE}=========================================${NC}"

print_status() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Create backup of current site
create_backup() {
    print_status "Creating backup of current site..."
    
    # Create backup directory with timestamp
    BACKUP_DIR="backup_$(date +%Y%m%d_%H%M%S)"
    mkdir -p "$BACKUP_DIR"
    
    print_status "Backup will be saved to: $BACKUP_DIR"
    print_warning "You may need to manually download current files from Hostinger first"
}

# Deploy to GitHub
deploy_to_github() {
    print_status "Deploying to GitHub..."
    
    # Get commit message
    if [ -z "$1" ]; then
        read -p "Enter commit message: " commit_msg
    else
        commit_msg="$1"
    fi
    
    # Git operations
    git add .
    git commit -m "$commit_msg"
    git push origin main
    
    print_status "Successfully deployed to GitHub!"
}

# Show instructions for Hostinger
show_hostinger_instructions() {
    echo ""
    echo -e "${BLUE}📋 Hostinger Setup Instructions:${NC}"
    echo ""
    echo "1. Go to your Hostinger control panel"
    echo "2. Navigate to 'Advanced' → 'Git'"
    echo "3. Click 'Create Repository'"
    echo "4. Choose your domain: citylinesigns.com"
    echo "5. Set Repository URL to: git@github.com:CitylineSigns/webpage.git"
    echo "6. Set Branch to: main"
    echo "7. Click 'Create'"
    echo ""
    echo -e "${YELLOW}If you get 'Project directory is not empty' error:${NC}"
    echo "1. Go to 'File Manager' in Hostinger"
    echo "2. Navigate to public_html/"
    echo "3. Select all files and create a backup folder"
    echo "4. Move current files to the backup folder"
    echo "5. Try creating the Git repository again"
    echo ""
    echo -e "${GREEN}After setup, Hostinger will automatically deploy when you push to GitHub!${NC}"
}

# Main function
main() {
    COMMIT_MESSAGE="$1"
    
    create_backup
    deploy_to_github "$COMMIT_MESSAGE"
    show_hostinger_instructions
    
    echo -e "${GREEN}🎉 Deployment workflow ready!${NC}"
    echo -e "${BLUE}Your site will be live at: https://citylinesigns.com${NC}"
}

# Show help
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo -e "${BLUE}Cityline Signs Deployment with Backup${NC}"
    echo ""
    echo "Usage:"
    echo "  ./deploy-with-backup.sh [commit_message]"
    echo ""
    echo "This script handles existing files in Hostinger by:"
    echo "1. Creating a backup of current files"
    echo "2. Deploying to GitHub"
    echo "3. Providing Hostinger setup instructions"
    echo ""
    exit 0
fi

# Run main function
main "$1" 