#!/bin/bash

# Cityline Signs Git Deployment Script for Hostinger
# This script uses Hostinger's Git integration for secure deployment

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="citylinesigns"
REMOTE_NAME="hostinger"

echo -e "${BLUE}🚀 Cityline Signs Git Deployment Script${NC}"
echo -e "${BLUE}=========================================${NC}"

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
    
    print_status "All dependencies are available"
}

# Setup Hostinger Git remote
setup_hostinger_git() {
    print_status "Setting up Hostinger Git integration..."
    
    echo -e "${BLUE}Please provide your Hostinger Git repository details:${NC}"
    echo ""
    
    read -p "Hostinger Git Repository URL: " git_url
    read -p "Hostinger SSH Key Path (or press Enter if using default): " ssh_key_path
    
    if [ -z "$ssh_key_path" ]; then
        ssh_key_path="$HOME/.ssh/id_rsa"
    fi
    
    # Add Hostinger as a remote
    if git remote | grep -q "$REMOTE_NAME"; then
        git remote remove "$REMOTE_NAME"
    fi
    
    git remote add "$REMOTE_NAME" "$git_url"
    
    # Configure SSH to use the Hostinger key
    if [ -f "$ssh_key_path" ]; then
        print_status "SSH key found at $ssh_key_path"
        print_warning "Make sure your SSH config includes the Hostinger key"
        echo ""
        echo "Add this to your ~/.ssh/config file:"
        echo "Host hostinger-git"
        echo "    HostName your-hostinger-git-host.com"
        echo "    User git"
        echo "    IdentityFile $ssh_key_path"
        echo "    IdentitiesOnly yes"
        echo ""
    else
        print_warning "SSH key not found at $ssh_key_path"
        print_warning "Please ensure your SSH key is properly configured for Hostinger"
    fi
    
    print_status "Hostinger Git remote configured as '$REMOTE_NAME'"
}

# Deploy via Git push
deploy_via_git() {
    print_status "Deploying via Git push to Hostinger..."
    
    # Check if Hostinger remote is configured
    if ! git remote | grep -q "$REMOTE_NAME"; then
        print_error "Hostinger Git remote not configured. Run setup first."
        exit 1
    fi
    
    # Get current branch
    CURRENT_BRANCH=$(git branch --show-current)
    
    # Push to Hostinger
    print_status "Pushing to Hostinger Git repository..."
    git push "$REMOTE_NAME" "$CURRENT_BRANCH"
    
    print_status "Deployment completed via Git!"
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
}

# Show deployment status
show_status() {
    print_status "Checking deployment status..."
    
    echo -e "${BLUE}Git Status:${NC}"
    git status --short
    
    echo -e "${BLUE}Remote Repositories:${NC}"
    git remote -v
    
    if git remote | grep -q "$REMOTE_NAME"; then
        echo -e "${BLUE}Last deployment:${NC}"
        git log --oneline -1
    fi
}

# Main deployment function
main() {
    COMMIT_MESSAGE="$1"
    
    check_dependencies
    git_operations "$COMMIT_MESSAGE"
    deploy_via_git
    
    echo -e "${GREEN}🎉 Git deployment completed successfully!${NC}"
    echo -e "${BLUE}Your site should be live at: https://citylinesigns.com${NC}"
    echo -e "${YELLOW}Note: Hostinger may take a few minutes to process the deployment${NC}"
}

# Show help
show_help() {
    echo -e "${BLUE}Cityline Signs Git Deployment Script${NC}"
    echo ""
    echo "Usage:"
    echo "  ./deploy-git.sh [commit_message]"
    echo ""
    echo "Options:"
    echo "  -h, --help     Show this help message"
    echo "  -s, --setup    Setup Hostinger Git integration"
    echo "  --status       Show deployment status"
    echo ""
    echo "Examples:"
    echo "  ./deploy-git.sh                           # Deploy with default commit message"
    echo "  ./deploy-git.sh 'Update homepage content' # Deploy with custom commit message"
    echo "  ./deploy-git.sh --setup                   # Setup Git integration"
    echo ""
}

# Parse command line arguments
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    -s|--setup)
        setup_hostinger_git
        exit 0
        ;;
    --status)
        show_status
        exit 0
        ;;
    *)
        main "$1"
        ;;
esac 