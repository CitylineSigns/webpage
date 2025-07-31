# Cityline Signs Deployment Workflow

This document outlines the smooth deployment workflow for updating citylinesigns.com on Hostinger.

## 🚀 Quick Start

### 1. Initial Setup (One-time)

```bash
# Run the setup wizard
./deploy.sh --setup
```

This will prompt you for your Hostinger FTP credentials and save them securely in the deployment script.

### 2. Deploy Updates

```bash
# Deploy with default commit message
./deploy.sh

# Deploy with custom commit message
./deploy.sh "Update homepage content and fix navigation"
```

## 📋 Prerequisites

- **Git** (for version control)
- **rsync** (for efficient file transfer)
- **Hostinger hosting account** with FTP access
- **FTP credentials** (hostname, username, password)

## 🔧 Configuration

### Hostinger FTP Credentials

The deployment script needs your Hostinger FTP credentials. You can configure them in two ways:

#### Option 1: Interactive Setup
```bash
./deploy.sh --setup
```

#### Option 2: Manual Configuration
Edit the `deploy.sh` file and update these variables:
```bash
REMOTE_HOST="your-hostinger-ftp-hostname.com"
REMOTE_USER="your-ftp-username"
REMOTE_PASS="your-ftp-password"
```

### Finding Your Hostinger FTP Credentials

1. **Log into your Hostinger control panel**
2. **Go to "Files" → "FTP Accounts"**
3. **Note down:**
   - FTP Hostname (usually `ftp.yourdomain.com`)
   - FTP Username
   - FTP Password

## 📁 File Structure

The deployment script automatically handles these files:

### ✅ Included in Deployment
- `*.html` - All HTML pages
- `*.css` - Stylesheets
- `*.js` - JavaScript files
- `*.png`, `*.svg` - Logo and image files
- `*.php` - PHP files (if any)
- `images/` - Image directory
- `photos/` - Photo directory

### ❌ Excluded from Deployment
- `.git/` - Git repository
- `*.md` - Documentation files
- `*.sh` - Script files
- `netlify.toml` - Netlify configuration
- `src/` - Source directory
- `dispensary-inventory/` - Development files
- `.DS_Store` - macOS system files

## 🔄 Deployment Process

The deployment script performs these steps automatically:

1. **Dependency Check** - Verifies required tools are installed
2. **Package Creation** - Creates a clean deployment package
3. **File Upload** - Transfers files to Hostinger via FTP
4. **Git Operations** - Commits changes and pushes to remote repository
5. **Cleanup** - Removes temporary files

## 🛠️ Advanced Usage

### Custom Commit Messages
```bash
./deploy.sh "Add new event planning guide and update compliance tool"
```

### View Help
```bash
./deploy.sh --help
```

### Setup Configuration
```bash
./deploy.sh --setup
```

## 🔍 Troubleshooting

### Common Issues

#### "rsync command not found"
```bash
# Install rsync on macOS
brew install rsync

# Or use the alternative lftp method
# (The script will automatically detect and use lftp if available)
```

#### "Permission denied" errors
```bash
# Make sure the script is executable
chmod +x deploy.sh
```

#### FTP connection issues
1. **Verify credentials** - Double-check hostname, username, and password
2. **Check firewall** - Ensure port 21 (FTP) is not blocked
3. **Try passive mode** - Some networks require passive FTP

### Alternative Deployment Methods

If rsync doesn't work, the script includes an lftp fallback:

```bash
# Install lftp
brew install lftp

# The script will automatically use lftp if available
./deploy.sh
```

## 📊 Version Control

The deployment workflow includes automatic Git operations:

- **Automatic commits** with timestamps or custom messages
- **Remote repository push** (if configured)
- **Change tracking** for all updates

### Setting up Remote Repository

```bash
# Add your remote repository
git remote add origin https://github.com/yourusername/citylinesigns.git

# Or for private repositories
git remote add origin git@github.com:yourusername/citylinesigns.git
```

## 🔒 Security Considerations

- **FTP passwords** are stored in plain text in the script
- **Consider using SSH keys** for better security
- **Keep your deployment script secure** and don't share it publicly

## 📈 Monitoring Deployments

After deployment, you can:

1. **Check your site** at https://citylinesigns.com
2. **Review Git history** with `git log`
3. **Monitor FTP logs** in your Hostinger control panel

## 🎯 Best Practices

1. **Test locally** before deploying
2. **Use descriptive commit messages**
3. **Backup before major changes**
4. **Deploy during low-traffic hours**
5. **Keep your FTP credentials secure**

## 📞 Support

If you encounter issues:

1. **Check the troubleshooting section** above
2. **Review the deployment logs** for error messages
3. **Verify your Hostinger FTP credentials**
4. **Test with a small file first**

---

**Last Updated:** $(date '+%Y-%m-%d')
**Version:** 1.0 