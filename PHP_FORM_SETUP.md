# PHP Form Setup Guide for Cityline Signs

## What's Been Created
- ✅ `process-form.php` - Simple PHP form handler
- ✅ Updated HTML form with proper action and method
- ✅ Updated JavaScript for AJAX form submission
- ✅ No external dependencies required

## Setup Instructions

### Step 1: Update Email Address
Edit `process-form.php` and change line 47:
```php
$to = 'your-email@citylinesigns.com'; // Replace with your actual email
```

### Step 2: Upload Files to Hostinger
1. Upload all files to your Hostinger hosting
2. Make sure `process-form.php` is in the same directory as `index.html`
3. Ensure PHP is enabled on your hosting (it should be by default)

### Step 3: Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email for the inquiry

## How It Works
1. **User fills out form** on your website
2. **JavaScript captures** the form data
3. **AJAX request** sends data to `process-form.php`
4. **PHP validates** and sanitizes the data
5. **Email is sent** to your business email
6. **Success/error message** is shown to user

## Features
- ✅ **No dependencies** - pure PHP
- ✅ **Input validation** - prevents spam and errors
- ✅ **Input sanitization** - prevents XSS attacks
- ✅ **Professional email format** - clean, readable emails
- ✅ **Error handling** - user-friendly error messages
- ✅ **Loading states** - shows "Sending..." while processing
- ✅ **Mobile-friendly** - works on all devices

## Email Format
You'll receive emails like this:
```
Subject: New Contact Form Submission - Cityline Signs

Hello,

You have received a new contact form submission from your website:

Name: John Doe
Email: john@example.com
Phone: (555) 123-4567
Message: I need a quote for storefront signage...

This inquiry was sent from your Cityline Signs website contact form.

Best regards,
Cityline Signs Website
```

## Troubleshooting
- **Emails not received**: Check spam folder, verify email address in PHP file
- **Form not submitting**: Check that PHP is enabled on your hosting
- **Error messages**: Check browser console for JavaScript errors

## Security Features
- Input sanitization prevents XSS attacks
- Email validation prevents spam
- Form validation on both client and server side
- No sensitive data stored on server 