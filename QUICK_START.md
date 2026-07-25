# 🚀 Quick Start Guide - Contact Form Setup

## ⏱️ 5 Minute Setup

### Step 1: Sign Up for EmailJS (2 minutes)

1. Go to: **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Use your Google account or email
4. Verify your email

### Step 2: Connect Gmail (1 minute)

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"**
5. Authorize EmailJS
6. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template (1 minute)

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. Paste this template:

```
Subject: New Contact Form Submission: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}
```

4. Set "To Email": **ganesanparkavi777@gmail.com**
5. Click **"Save"**
6. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key (30 seconds)

1. Click **"Account"** → **"API Keys"**
2. **Copy your Public Key** (looks like: `aBcDeFgHiJkLmN`)

### Step 5: Update Config File (30 seconds)

1. Open: **`assets/js/emailjs-config.js`**
2. Replace these three lines:

```javascript
PUBLIC_KEY: "your_actual_public_key",     // Paste here
SERVICE_ID: "service_abc123",              // Paste here
TEMPLATE_ID: "template_xyz789",            // Paste here
```

3. **Save the file**

### Step 6: Test It! (1 minute)

1. Open **`test-contact-form.html`** in your browser
2. Fill out the form
3. Click **"Send Message"**
4. Check **ganesanparkavi777@gmail.com** for the email

## ✅ Done!

Your contact form is now live and working!

## 🆘 Need Help?

- **Detailed Guide:** See `EMAILJS_SETUP_GUIDE.md`
- **Technical Docs:** See `CONTACT_FORM_README.md`
- **Overview:** See `IMPLEMENTATION_SUMMARY.md`

## 📝 What You Got

✅ Form validation (Name, Email, Subject, Message)  
✅ Loading spinner during submission  
✅ Success message after sending  
✅ Error handling if something fails  
✅ Form clears after successful send  
✅ Emails sent to ganesanparkavi777@gmail.com  
✅ Mobile responsive  
✅ No backend server needed  
✅ Free (200 emails/month)  

---

**Total Setup Time:** ~5 minutes  
**Cost:** Free  
**Difficulty:** Easy ⭐
