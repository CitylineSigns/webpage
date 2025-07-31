#!/bin/bash

# Extract SSH Public Key from Hostinger's Private Key

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🔑 SSH Public Key Extractor${NC}"
echo -e "${BLUE}===========================${NC}"

print_status() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if Hostinger key exists
if [ ! -f "$HOME/.ssh/hostinger_key" ]; then
    echo -e "${YELLOW}Hostinger SSH key not found at ~/.ssh/hostinger_key${NC}"
    echo ""
    echo "Please provide the path to your Hostinger SSH key:"
    read -p "SSH Key Path: " key_path
    
    if [ ! -f "$key_path" ]; then
        echo -e "${RED}Error: SSH key not found at $key_path${NC}"
        exit 1
    fi
else
    key_path="$HOME/.ssh/hostinger_key"
fi

print_status "Extracting public key from $key_path"

# Extract the public key
public_key=$(ssh-keygen -y -f "$key_path")

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Public key extracted successfully!${NC}"
    echo ""
    echo -e "${BLUE}Copy this public key and add it to your GitHub account:${NC}"
    echo ""
    echo "=========================================="
    echo "$public_key"
    echo "=========================================="
    echo ""
    echo -e "${YELLOW}Instructions:${NC}"
    echo "1. Copy the public key above (between the lines)"
    echo "2. Go to GitHub.com → Settings → SSH and GPG keys"
    echo "3. Click 'New SSH key'"
    echo "4. Give it a title like 'Hostinger Deployment'"
    echo "5. Paste the public key in the 'Key' field"
    echo "6. Click 'Add SSH key'"
    echo ""
    echo -e "${GREEN}After adding the key, test the connection:${NC}"
    echo "./setup-git-deployment.sh --test"
else
    echo -e "${RED}Error: Failed to extract public key${NC}"
    exit 1
fi 