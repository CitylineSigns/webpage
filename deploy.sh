#!/bin/bash

# Cityline Signs Deployment Script for Hostinger
# This script automates the deployment process to Hostinger

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="citylinesigns"
REMOTE_HOST="195.179.238.97"  # Replace with your actual Hostinger FTP hostname
REMOTE_USER="u886809388.citylinesigns.com"                 # Replace with your actual FTP username
REMOTE_PASS="your-ftp-password"                 # Replace with your actual FTP password
REMOTE_PATH="/public_html/"                     # Hostinger's public directory
LOCAL_PATH="./"

echo -e "${BLUE}🚀 Cityline Signs Deployment Script${NC}"
echo -e "${BLUE}=====================================${NC}"

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi
    
    if ! command -v rsync &> /dev/null; then
        print_error "rsync is not installed. Please install rsync first."
        exit 1
    fi
    
    print_status "All dependencies are available"
}

# Create deployment package
create_deployment_package() {
    print_status "Creating deployment package..."
    
    # Create a temporary deployment directory
    DEPLOY_DIR="./deploy_temp"
    rm -rf "$DEPLOY_DIR"
    mkdir -p "$DEPLOY_DIR"
    
    # Copy all necessary files for deployment
    print_status "Copying files to deployment package..."
    
    # HTML files
    cp *.html "$DEPLOY_DIR/"
    
    # CSS files
    cp *.css "$DEPLOY_DIR/"
    
    # JavaScript files
    cp *.js "$DEPLOY_DIR/"
    
    # Images and photos
    if [ -d "images" ]; then
        cp -r images "$DEPLOY_DIR/"
    fi
    
    if [ -d "photos" ]; then
        cp -r photos "$DEPLOY_DIR/"
    fi
    
    # Logo files
    cp *.png *.svg "$DEPLOY_DIR/" 2>/dev/null || true
    
    # PHP files (if any)
    cp *.php "$DEPLOY_DIR/" 2>/dev/null || true
    
    print_status "Deployment package created in $DEPLOY_DIR"
}

# Deploy to Hostinger via FTP
deploy_to_hostinger() {
    print_status "Deploying to Hostinger..."
    
    if [ "$REMOTE_HOST" = "your-hostinger-ftp-hostname.com" ]; then
        print_error "Please configure your Hostinger FTP credentials in deploy.sh"
        print_warning "Edit the REMOTE_HOST and REMOTE_USER variables at the top of this script"
        exit 1
    fi
    
    # Use rsync for efficient file transfer
    print_status "Uploading files to Hostinger..."
    rsync -avz --delete \
        --exclude='.git' \
        --exclude='deploy_temp' \
        --exclude='.DS_Store' \
        --exclude='*.md' \
        --exclude='*.sh' \
        --exclude='netlify.toml' \
        --exclude='src/' \
        --exclude='dispensary-inventory/' \
        "$LOCAL_PATH" \
        "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH"
    
    print_status "Files uploaded successfully!"
}

# Alternative deployment method using lftp (if available)
deploy_with_lftp() {
    print_status "Deploying using lftp..."
    
    # Create lftp script
    cat > deploy_script.lftp << EOF
open -u $REMOTE_USER,$REMOTE_PASS $REMOTE_HOST
mirror --reverse --delete --exclude-glob .git --exclude-glob deploy_temp --exclude-glob .DS_Store --exclude-glob *.md --exclude-glob *.sh --exclude-glob netlify.toml --exclude-glob src/ --exclude-glob dispensary-inventory/ . $REMOTE_PATH
bye
EOF
    
    lftp -f deploy_script.lftp
    rm deploy_script.lftp
    
    print_status "Deployment completed with lftp!"
}

# Git operations
git_operations() {
    print_status "Performing Git operations..."
    
    # Add all changes
    git add .
    
    # Check if there are changes to commit
    if git diff --staged --quiet; then
        print_warning "No changes to commit"
    else
        # Get commit message from user or use default
        if [ -z "$1" ]; then
            COMMIT_MSG="Update citylinesigns.com - $(date '+%Y-%m-%d %H:%M:%S')"
        else
            COMMIT_MSG="$1"
        fi
        
        git commit -m "$COMMIT_MSG"
        print_status "Changes committed: $COMMIT_MSG"
    fi
    
    # Push to remote if configured
    if git remote -v | grep -q origin; then
        print_status "Pushing to remote repository..."
        git push origin main 2>/dev/null || git push origin master 2>/dev/null || print_warning "Could not push to remote repository"
    else
        print_warning "No remote repository configured. Run 'git remote add origin <your-repo-url>' to add one."
    fi
}

# Cleanup
cleanup() {
    print_status "Cleaning up..."
    rm -rf ./deploy_temp
    print_status "Cleanup completed"
}

# Main deployment function
main() {
    COMMIT_MESSAGE="$1"
    
    check_dependencies
    create_deployment_package
    deploy_to_hostinger
    git_operations "$COMMIT_MESSAGE"
    cleanup
    
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo -e "${BLUE}Your site should be live at: https://citylinesigns.com${NC}"
}

# Show help
show_help() {
    echo -e "${BLUE}Cityline Signs Deployment Script${NC}"
    echo ""
    echo "Usage:"
    echo "  ./deploy.sh [commit_message]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -s, --setup    Setup deployment configuration"
    echo ""
    echo "Examples:"
    echo "  ./deploy.sh                           # Deploy with default commit message"
    echo "  ./deploy.sh 'Update homepage content' # Deploy with custom commit message"
    echo ""
}

# Setup configuration
setup_config() {
    echo -e "${BLUE}🔧 Setting up deployment configuration${NC}"
    echo ""
    
    echo "Please provide your Hostinger FTP credentials:"
    echo ""
    
    read -p "FTP Hostname: " ftp_host
    read -p "FTP Username: " ftp_user
    read -s -p "FTP Password: " ftp_pass
    echo ""
    
    # Update the script with the credentials
    sed -i.bak "s|REMOTE_HOST=\"your-hostinger-ftp-hostname.com\"|REMOTE_HOST=\"$ftp_host\"|" deploy.sh
    sed -i.bak "s|REMOTE_USER=\"your-ftp-username\"|REMOTE_USER=\"$ftp_user\"|" deploy.sh
    
    # Add password variable
    if ! grep -q "REMOTE_PASS" deploy.sh; then
        sed -i.bak "/REMOTE_USER=/a REMOTE_PASS=\"$ftp_pass\"" deploy.sh
    else
        sed -i.bak "s|REMOTE_PASS=\"[^\"]*\"|REMOTE_PASS=\"$ftp_pass\"|" deploy.sh
    fi
    
    rm deploy.sh.bak
    
    print_status "Configuration saved!"
    print_warning "Note: Your password is stored in plain text. Consider using SSH keys for better security."
}

# Parse command line arguments
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    -s|--setup)
        setup_config
        exit 0
        ;;
    *)
        main "$1"
        ;;
esac 