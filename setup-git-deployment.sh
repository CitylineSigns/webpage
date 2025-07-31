#!/bin/bash

# Cityline Signs Git Deployment Setup Script
# Handles both GitHub integration and direct Hostinger Git setup

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔧 Cityline Signs Git Deployment Setup${NC}"
echo -e "${BLUE}=======================================${NC}"

print_status() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if SSH key exists
check_ssh_key() {
    if [ -f "$HOME/.ssh/hostinger_key" ]; then
        print_status "Hostinger SSH key found at ~/.ssh/hostinger_key"
        return 0
    else
        print_warning "Hostinger SSH key not found at ~/.ssh/hostinger_key"
        return 1
    fi
}

# Setup GitHub integration
setup_github_integration() {
    print_status "Setting up GitHub integration..."
    
    echo -e "${BLUE}This will set up GitHub as your primary repository with Hostinger auto-deployment${NC}"
    echo ""
    
    read -p "GitHub Repository URL (e.g., https://github.com/username/citylinesigns.git): " github_url
    read -p "GitHub Username: " github_username
    
    # Convert HTTPS to SSH if needed
    if [[ $github_url == https://* ]]; then
        github_ssh_url=$(echo $github_url | sed 's|https://github.com/|git@github.com:|')
        print_status "Converted to SSH URL: $github_ssh_url"
    else
        github_ssh_url=$github_url
    fi
    
    # Add GitHub as origin
    if git remote | grep -q origin; then
        git remote remove origin
    fi
    git remote add origin "$github_ssh_url"
    
    # Configure SSH for GitHub
    if [ -f "$HOME/.ssh/hostinger_key" ]; then
        print_status "Configuring SSH for GitHub with Hostinger key..."
        
        # Add to SSH config
        cat >> ~/.ssh/config << EOF

# GitHub integration for Cityline Signs
Host github-citylinesigns
    HostName github.com
    User git
    IdentityFile ~/.ssh/hostinger_key
    IdentitiesOnly yes
EOF
        
        print_status "SSH config updated for GitHub"
        print_warning "You need to add the public key to your GitHub account:"
        echo "ssh-keygen -y -f ~/.ssh/hostinger_key"
        echo ""
        echo "Copy the output and add it to GitHub:"
        echo "Settings → SSH and GPG keys → New SSH key"
    fi
    
    print_status "GitHub integration configured!"
}

# Setup direct Hostinger Git
setup_direct_hostinger() {
    print_status "Setting up direct Hostinger Git repository..."
    
    echo -e "${BLUE}This will set up direct deployment to Hostinger's Git repository${NC}"
    echo ""
    
    read -p "Hostinger Git Repository URL: " hostinger_url
    read -p "SSH Key Path (default: ~/.ssh/hostinger_key): " ssh_key_path
    
    if [ -z "$ssh_key_path" ]; then
        ssh_key_path="$HOME/.ssh/hostinger_key"
    fi
    
    # Add Hostinger as remote
    if git remote | grep -q hostinger; then
        git remote remove hostinger
    fi
    git remote add hostinger "$hostinger_url"
    
    # Configure SSH
    if [ -f "$ssh_key_path" ]; then
        print_status "Configuring SSH for Hostinger..."
        
        # Add to SSH config
        cat >> ~/.ssh/config << EOF

# Direct Hostinger Git for Cityline Signs
Host hostinger-git
    HostName $(echo $hostinger_url | sed 's|git@||' | sed 's|:.*||')
    User git
    IdentityFile $ssh_key_path
    IdentitiesOnly yes
EOF
        
        print_status "SSH config updated for Hostinger"
    else
        print_warning "SSH key not found at $ssh_key_path"
        print_warning "Please ensure your SSH key is properly configured"
    fi
    
    print_status "Direct Hostinger Git configured!"
}

# Test SSH connection
test_ssh_connection() {
    print_status "Testing SSH connections..."
    
    if git remote | grep -q origin; then
        echo -e "${BLUE}Testing GitHub connection...${NC}"
        if ssh -T git@github.com 2>&1 | grep -q "successfully authenticated"; then
            print_status "GitHub SSH connection successful!"
        else
            print_warning "GitHub SSH connection failed. Check your SSH key configuration."
        fi
    fi
    
    if git remote | grep -q hostinger; then
        echo -e "${BLUE}Testing Hostinger connection...${NC}"
        if ssh -T hostinger-git 2>&1 | grep -q "successfully authenticated"; then
            print_status "Hostinger SSH connection successful!"
        else
            print_warning "Hostinger SSH connection failed. Check your SSH key configuration."
        fi
    fi
}

# Show current configuration
show_config() {
    print_status "Current Git configuration:"
    echo ""
    echo -e "${BLUE}Remote Repositories:${NC}"
    git remote -v
    echo ""
    echo -e "${BLUE}SSH Config:${NC}"
    if [ -f ~/.ssh/config ]; then
        grep -A 5 -B 1 "citylinesigns\|hostinger" ~/.ssh/config || echo "No Cityline Signs SSH config found"
    else
        echo "No SSH config file found"
    fi
}

# Main setup function
main() {
    echo -e "${BLUE}Choose your deployment setup:${NC}"
    echo ""
    echo "1) GitHub Integration (recommended)"
    echo "   - Push to GitHub, Hostinger auto-deploys"
    echo "   - Better version control and collaboration"
    echo ""
    echo "2) Direct Hostinger Git"
    echo "   - Push directly to Hostinger"
    echo "   - Simpler setup, direct deployment"
    echo ""
    echo "3) Show current configuration"
    echo ""
    
    read -p "Choose option (1-3): " choice
    
    case $choice in
        1)
            setup_github_integration
            ;;
        2)
            setup_direct_hostinger
            ;;
        3)
            show_config
            ;;
        *)
            print_error "Invalid choice"
            exit 1
            ;;
    esac
    
    echo ""
    print_status "Setup completed!"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo "1. Add the SSH public key to your Git service"
    echo "2. Test the connection: ./setup-git-deployment.sh --test"
    echo "3. Deploy your first update: ./deploy-git.sh"
}

# Test connections
if [ "$1" = "--test" ]; then
    test_ssh_connection
    exit 0
fi

# Show help
if [ "$1" = "--help" ] || [ "$1" = "-h" ]; then
    echo -e "${BLUE}Cityline Signs Git Deployment Setup${NC}"
    echo ""
    echo "Usage:"
    echo "  ./setup-git-deployment.sh          # Interactive setup"
    echo "  ./setup-git-deployment.sh --test   # Test SSH connections"
    echo "  ./setup-git-deployment.sh --help   # Show this help"
    echo ""
    exit 0
fi

# Run main setup
main 