# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to receive contact form submissions directly to your email without a backend server.

## 📋 Prerequisites

- A Gmail account (or any email provider supported by EmailJS)
- 5-10 minutes to complete setup

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right)
3. Sign up using your email or Google account
4. Verify your email address

### Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider (e.g., **Gmail**)
4. Click **"Connect Account"** and authorize EmailJS to send emails
5. Once connected, you'll see a **Service ID** (e.g., `service_abc123`)
6. **Copy and save this Service ID** - you'll need it later

### Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Replace the default template with this:

```
Subject: New Contact Form Submission: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Important:** Make sure these variables are included:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`

5. In the **"To Email"** field, enter: `ganesanparkavi777@gmail.com`
6. Click **"Save"**
7. You'll see a **Template ID** (e.g., `template_xyz789`)
8. **Copy and save this Template ID**

### Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Click on **"API Keys"**
3. You'll see your **Public Key** (e.g., `aBcDeFgHiJkLmNoPqRsTuVwXyZ`)
4. **Copy and save this Public Key**

### Step 5: Configure Your Website

1. Open the file: `assets/js/emailjs-config.js`
2. Replace the placeholder values with your actual credentials:

```javascript
const EMAILJS_CONFIG = {
  // Replace with your Public Key from Step 4
  PUBLIC_KEY: "aBcDeFgHiJkLmNoPqRsTuVwXyZ",
  
  // Replace with your Service ID from Step 2
  SERVICE_ID: "service_abc123",
  
  // Replace with your Template ID from Step 3
  TEMPLATE_ID: "template_xyz789",
  
  // Your email (already set)
  TO_EMAIL: "ganesanparkavi777@gmail.com"
};
```

3. Save the file

### Step 6: Test Your Contact Form

1. Open your portfolio website in a browser
2. Navigate to the **Contact** section
3. Fill out the form with test data:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Subject:** Test Message
   - **Message:** This is a test message from my contact form.
4. Click **"Send Message"**
5. You should see a success message
6. Check your email at `ganesanparkavi777@gmail.com` - you should receive the test message

## 🔒 Security Notes

- ✅ The Public Key is safe to use in frontend code
- ✅ EmailJS rate limits prevent spam (200 emails/month on free plan)
- ✅ No backend server required
- ✅ All credentials are stored in a separate config file

## 📊 EmailJS Free Plan Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for personal portfolios!

## 🆙 Upgrade Options

If you need more emails:
- **Personal Plan:** $9/month - 1,000 emails
- **Professional Plan:** $25/month - 10,000 emails
- Visit: [https://www.emailjs.com/pricing/](https://www.emailjs.com/pricing/)

## 🐛 Troubleshooting

### Form shows "EmailJS not configured" warning
- Check that you've updated `emailjs-config.js` with your actual credentials
- Make sure you removed the placeholder text "YOUR_PUBLIC_KEY_HERE"

### Emails not being received
1. Check your spam/junk folder
2. Verify the Service ID, Template ID, and Public Key are correct
3. Test the template directly in EmailJS dashboard
4. Check your EmailJS account dashboard for error logs

### "Failed to send message" error
1. Open browser console (F12) to see detailed error
2. Check that EmailJS CDN is loading: https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js
3. Verify your internet connection
4. Check EmailJS service status

### Form validation issues
- All fields are required
- Email must be valid format
- Minimum lengths:
  - Name: 2 characters
  - Subject: 3 characters
  - Message: 10 characters

## 📞 Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com

## ✅ Checklist

Before going live, make sure:

- [ ] EmailJS account created and verified
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Email template created with correct variables
- [ ] Public Key, Service ID, and Template ID copied
- [ ] `emailjs-config.js` updated with real credentials
- [ ] Test email sent and received successfully
- [ ] Form validation working correctly
- [ ] Success and error messages displaying properly
- [ ] Form clears after successful submission

## 🎉 You're Done!

Your contact form is now fully functional and will send emails directly to `ganesanparkavi777@gmail.com` without needing a backend server!

---

**Created by:** GANESAN K
**Last Updated:** 2026
