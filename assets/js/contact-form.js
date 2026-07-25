/**
 * Contact Form Handler with EmailJS Integration
 * 
 * This script handles form validation, submission, and email sending
 * using EmailJS service without requiring a backend server.
 */

(function() {
  'use strict';

  /**
   * Initialize EmailJS with public key
   */
  function initEmailJS() {
    if (typeof emailjs === 'undefined') {
      console.error('EmailJS library not loaded');
      return false;
    }
    
    // Initialize EmailJS with public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    return true;
  }

  /**
   * Validate form field
   * @param {string} fieldName - Name of the field to validate
   * @param {string} value - Value to validate
   * @returns {Object} - {isValid: boolean, error: string}
   */
  function validateField(fieldName, value) {
    const trimmedValue = value.trim();
    
    switch(fieldName) {
      case 'name':
        if (!trimmedValue) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.NAME_EMPTY };
        }
        if (trimmedValue.length < VALIDATION_CONFIG.MIN_NAME_LENGTH) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.NAME_TOO_SHORT };
        }
        break;
        
      case 'email':
        if (!trimmedValue) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.EMAIL_EMPTY };
        }
        if (!VALIDATION_CONFIG.EMAIL_REGEX.test(trimmedValue)) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.EMAIL_INVALID };
        }
        break;
        
      case 'subject':
        if (!trimmedValue) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.SUBJECT_EMPTY };
        }
        if (trimmedValue.length < VALIDATION_CONFIG.MIN_SUBJECT_LENGTH) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.SUBJECT_TOO_SHORT };
        }
        break;
        
      case 'message':
        if (!trimmedValue) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.MESSAGE_EMPTY };
        }
        if (trimmedValue.length < VALIDATION_CONFIG.MIN_MESSAGE_LENGTH) {
          return { isValid: false, error: UI_MESSAGES.VALIDATION_ERRORS.MESSAGE_TOO_SHORT };
        }
        break;
    }
    
    return { isValid: true, error: null };
  }

  /**
   * Validate entire form
   * @param {Object} formData - Form data to validate
   * @returns {Object} - {isValid: boolean, errors: Array}
   */
  function validateForm(formData) {
    const errors = [];
    
    // Validate each field
    const fields = ['name', 'email', 'subject', 'message'];
    fields.forEach(field => {
      const validation = validateField(field, formData[field]);
      if (!validation.isValid) {
        errors.push(validation.error);
      }
    });
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }

  /**
   * Show error message in the form
   * @param {HTMLElement} form - Form element
   * @param {string} message - Error message to display
   */
  function showError(form, message) {
    const errorDiv = form.querySelector('.error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
      errorDiv.style.display = 'none';
    }, 5000);
  }

  /**
   * Show success message in the form
   * @param {HTMLElement} form - Form element
   */
  function showSuccess(form) {
    const successDiv = form.querySelector('.sent-message');
    successDiv.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
      successDiv.style.display = 'none';
    }, 5000);
  }

  /**
   * Show/hide loading spinner
   * @param {HTMLElement} form - Form element
   * @param {boolean} show - Whether to show or hide
   */
  function showLoading(form, show) {
    const loadingDiv = form.querySelector('.loading');
    loadingDiv.style.display = show ? 'block' : 'none';
  }

  /**
   * Clear form fields
   * @param {HTMLElement} form - Form element
   */
  function clearForm(form) {
    form.reset();
  }

  /**
   * Send email using EmailJS
   * @param {Object} formData - Form data to send
   * @returns {Promise}
   */
  async function sendEmail(formData) {
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL
      };

      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      return { success: true, response };
    } catch (error) {
      console.error('EmailJS Error:', error);
      return { success: false, error };
    }
  }

  /**
   * Handle form submission
   * @param {Event} e - Submit event
   */
  async function handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Disable submit button to prevent double submission
    submitButton.disabled = true;
    
    // Hide any previous messages
    form.querySelector('.error-message').style.display = 'none';
    form.querySelector('.sent-message').style.display = 'none';
    
    // Get form data
    const formData = {
      name: form.querySelector('input[name="name"]').value,
      email: form.querySelector('input[name="email"]').value,
      subject: form.querySelector('input[name="subject"]').value,
      message: form.querySelector('textarea[name="message"]').value
    };
    
    // Validate form
    const validation = validateForm(formData);
    
    if (!validation.isValid) {
      // Show first validation error
      showError(form, validation.errors[0]);
      submitButton.disabled = false;
      return;
    }
    
    // Show loading
    showLoading(form, true);
    
    // Send email
    const result = await sendEmail(formData);
    
    // Hide loading
    showLoading(form, false);
    
    // Handle result
    if (result.success) {
      showSuccess(form);
      clearForm(form);
    } else {
      showError(form, UI_MESSAGES.ERROR);
    }
    
    // Re-enable submit button
    submitButton.disabled = false;
  }

  /**
   * Initialize contact form
   */
  function init() {
    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY_HERE" ||
        EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID_HERE" ||
        EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID_HERE") {
      console.warn('⚠️ EmailJS not configured. Please update emailjs-config.js with your credentials.');
      console.warn('Visit https://www.emailjs.com/ to get your credentials.');
      return;
    }
    
    // Initialize EmailJS
    if (!initEmailJS()) {
      console.error('Failed to initialize EmailJS');
      return;
    }
    
    // Get contact form
    const contactForm = document.querySelector('.php-email-form');
    
    if (contactForm) {
      // Remove PHP form action
      contactForm.removeAttribute('action');
      contactForm.removeAttribute('method');
      
      // Add submit event listener
      contactForm.addEventListener('submit', handleSubmit);
      
      console.log('✅ Contact form initialized with EmailJS');
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
