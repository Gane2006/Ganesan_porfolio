/**
 * EmailJS Configuration
 * 
 * HOW TO SET UP:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
 * 4. Get your credentials from EmailJS dashboard
 * 5. Replace the values below with your actual credentials
 */

// EmailJS Configuration Object
const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Account > API Keys)
  // Example: "YOUR_PUBLIC_KEY_HERE"
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",
  
  // Your EmailJS Service ID (found in Email Services)
  // Example: "service_abc123"
  SERVICE_ID: "YOUR_SERVICE_ID_HERE",
  
  // Your EmailJS Template ID (found in Email Templates)
  // Example: "template_xyz789"
  TEMPLATE_ID: "YOUR_TEMPLATE_ID_HERE",
  
  // Your email where messages will be sent
  TO_EMAIL: "ganesanparkavi777@gmail.com"
};

// Validation Configuration
const VALIDATION_CONFIG = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_NAME_LENGTH: 2,
  MIN_SUBJECT_LENGTH: 3,
  MIN_MESSAGE_LENGTH: 10
};

// UI Messages
const UI_MESSAGES = {
  SUCCESS: "Thank you! Your message has been sent successfully.",
  ERROR: "Failed to send message. Please try again later.",
  VALIDATION_ERRORS: {
    NAME_EMPTY: "Please enter your name.",
    NAME_TOO_SHORT: "Name must be at least 2 characters long.",
    EMAIL_EMPTY: "Please enter your email address.",
    EMAIL_INVALID: "Please enter a valid email address.",
    SUBJECT_EMPTY: "Please enter a subject.",
    SUBJECT_TOO_SHORT: "Subject must be at least 3 characters long.",
    MESSAGE_EMPTY: "Please enter your message.",
    MESSAGE_TOO_SHORT: "Message must be at least 10 characters long."
  }
};

// Export configuration (for module usage)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EMAILJS_CONFIG, VALIDATION_CONFIG, UI_MESSAGES };
}
