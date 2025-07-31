# Cityline Signs Git Deployment Workflow

This document outlines the secure Git-based deployment workflow for citylinesigns.com using Hostinger's Git integration.

## 🚀 **Why Git Deployment is Better**

✅ **More Secure** - Uses SSH keys instead of FTP passwords  
✅ **Faster** - Only uploads changed files  
✅ **Version Control** - Full history of all deployments  
✅ **Rollback Capability** - Easy to revert to previous versions  
✅ **Automated** - Hostinger automatically deploys on push  

## 📋 **Prerequisites**

- **Git** installed on your machine
- **Hostinger hosting account** with Git integration enabled
- **SSH key** (Hostinger will provide this)
- **Hostinger Git repository** URL

## 🔧 **Initial Setup**

### **Step 1: Enable Git in Hostinger**

1. **Log into your Hostinger control panel**
2. **Go to "Advanced" → "Git"**
3. **Click "Create Repository"**
4. **Choose your domain** (citylinesigns.com)
5. **Note down the repository URL** (looks like: `git@hostinger.com:username/repo.git`)

### **Step 2: Configure SSH Key**

Hostinger will provide you with an SSH key. You have two options:

#### **Option A: Use Hostinger's Provided Key**
1. **Download the SSH key** from Hostinger
2. **Save it** to `~/.ssh/hostinger_key`
3. **Set permissions**: `chmod 600 ~/.ssh/hostinger_key`

#### **Option B: Use Your Own SSH Key**
1. **Generate a new SSH key**: `ssh-keygen -t rsa -b 4096 -C "your-email@example.com"`
2. **Add the public key** to Hostinger's Git settings

### **Step 3: Configure SSH Config**

Add this to your `~/.ssh/config` file:

```bash
Host hostinger-git
    HostName hostinger.com
    User git
    IdentityFile ~/.ssh/hostinger_key
    IdentitiesOnly yes
```

### **Step 4: Setup Git Integration**

```bash
# Run the setup wizard
./deploy-git.sh --setup
```

This will prompt you for:
- **Hostinger Git Repository URL**
- **SSH Key Path** (if using custom key)

## 🔄 **Deployment Workflow**

### **Quick Deploy**

```bash
# Deploy with default commit message
./deploy-git.sh

# Deploy with custom commit message
./deploy-git.sh "Update homepage and add new event planning guide"
```

### **What Happens During Deployment**

1. **Git Add** - Stages all changed files
2. **Git Commit** - Creates a commit with your message
3. **Git Push** - Pushes to Hostinger's repository
4. **Auto-Deploy** - Hostinger automatically deploys the changes

## 📁 **File Management**

### **Files Included in Deployment**
- ✅ All HTML pages (`*.html`)
- ✅ Stylesheets (`*.css`)
- ✅ JavaScript files (`*.js`)
- ✅ Images (`images/`, `photos/`)
- ✅ Logo files (`*.png`, `*.svg`)
- ✅ PHP files (if any)

### **Files Excluded**
- ❌ `.git/` directory
- ❌ Documentation (`*.md`)
- ❌ Scripts (`*.sh`)
- ❌ Development files (`src/`, `dispensary-inventory/`)
- ❌ System files (`.DS_Store`)

## 🛠️ **Advanced Usage**

### **Check Deployment Status**

```bash
./deploy-git.sh --status
```

This shows:
- Current Git status
- Remote repositories
- Last deployment

### **View Help**

```bash
./deploy-git.sh --help
```

### **Manual Git Operations**

```bash
# Check what files have changed
git status

# See recent commits
git log --oneline -10

# Check remote configuration
git remote -v
```

## 🔍 **Troubleshooting**

### **SSH Connection Issues**

```bash
# Test SSH connection
ssh -T git@hostinger.com

# If using custom hostname
ssh -T hostinger-git
```

### **Permission Denied**

```bash
# Fix SSH key permissions
chmod 600 ~/.ssh/hostinger_key

# Check SSH config
cat ~/.ssh/config
```

### **Repository Not Found**

1. **Verify the Git URL** in Hostinger control panel
2. **Check SSH key** is properly configured
3. **Ensure repository** is created in Hostinger

### **Deployment Not Triggered**

1. **Check Hostinger logs** in control panel
2. **Verify branch name** (usually `main` or `master`)
3. **Wait a few minutes** - deployment can take time

## 🔒 **Security Best Practices**

1. **Keep SSH keys secure** - Don't share or commit them
2. **Use strong passwords** - Even with SSH keys
3. **Regular key rotation** - Update SSH keys periodically
4. **Monitor deployments** - Check logs for unusual activity

## 📊 **Monitoring & Logs**

### **Hostinger Control Panel**
- **Git section** shows deployment history
- **File Manager** shows current live files
- **Error logs** for troubleshooting

### **Local Git History**
```bash
# View deployment history
git log --oneline

# See what changed in last deployment
git show --name-only HEAD
```

## 🎯 **Best Practices**

1. **Test locally** before deploying
2. **Use descriptive commit messages**
3. **Deploy during low-traffic hours**
4. **Keep backups** of important files
5. **Monitor site** after deployment

## 📞 **Support**

### **Hostinger Support**
- **Git integration issues** - Contact Hostinger support
- **SSH key problems** - Check Hostinger documentation
- **Deployment failures** - Check control panel logs

### **Local Issues**
- **Git problems** - Check this documentation
- **SSH issues** - Verify SSH configuration
- **Script errors** - Check error messages

---

**Last Updated:** $(date '+%Y-%m-%d')
**Version:** 1.0 