// Contact Form Validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    let isValid = true;
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!formData.name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (!formData.email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    if (!formData.message) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Message sent successfully!';
        document.getElementById('successMessage').style.color = '#2ecc71';
        this.reset();
        setTimeout(() => {
            document.getElementById('successMessage').textContent = '';
        }, 3000);
    }
});