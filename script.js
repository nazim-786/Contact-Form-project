document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset previous error messages and styles
        resetErrors();
        
        // Validate inputs
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Form is valid - show success message
            showSuccess();
        }
    });

    function validateName() {
        const nameValue = nameInput.value.trim();
        
        if (nameValue === '') {
            nameError.textContent = 'Name is required';
            nameInput.classList.add('error');
            return false;
        }
        
        // Check for minimum length
        if (nameValue.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            nameInput.classList.add('error');
            return false;
        }
        
        // Check for valid characters (letters, spaces, hyphens, apostrophes)
        const nameRegex = /^[a-zA-Zà-üÀ-Ü\s'-]+$/;
        if (!nameRegex.test(nameValue)) {
            nameError.textContent = 'Name contains invalid characters';
            nameInput.classList.add('error');
            return false;
        }
        
        nameInput.classList.add('valid');
        return true;
    }

    function validateEmail() {
        const emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('error');
            return false;
        }
        
        // Check email format with regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('error');
            return false;
        }
        
        emailInput.classList.add('valid');
        return true;
    }

    function validateMessage() {
        const messageValue = messageInput.value.trim();
        
        if (messageValue === '') {
            messageError.textContent = 'Message is required';
            messageInput.classList.add('error');
            return false;
        }
        
        // Check for minimum length
        if (messageValue.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageInput.classList.add('error');
            return false;
        }
        
        messageInput.classList.add('valid');
        return true;
    }

    function resetErrors() {
        // Clear error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        // Reset input styles
        nameInput.classList.remove('error', 'valid');
        emailInput.classList.remove('error', 'valid');
        messageInput.classList.remove('error', 'valid');
        
        // Hide success message
        successMessage.style.display = 'none';
    }

    function showSuccess() {
        // Hide the form
        contactForm.style.display = 'none';
        
        // Show success message
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.display = 'block';
        
        // In a real application, you would submit the form data to a server here
        // For demo purposes, we'll just show the success message
    }
});