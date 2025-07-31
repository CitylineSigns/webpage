#!/bin/bash

# Quick Deploy Script for Cityline Signs
# Simplified version for frequent updates

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}⚡ Quick Deploy - Cityline Signs${NC}"

# Get commit message from user
read -p "Enter commit message (or press Enter for default): " commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="Quick update - $(date '+%Y-%m-%d %H:%M')"
fi

# Run the main deployment script
./deploy.sh "$commit_msg"

echo -e "${GREEN}✅ Quick deploy completed!${NC}" 