document.addEventListener('DOMContentLoaded', function () {
    // Form submission handling
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Thank you for your message!');
                this.reset();
            } else {
                alert('There was a problem submitting your form.');
            }
        })
        .catch(error => console.error('Error:', error));
    });

    // Toggle Navbar on Mobile
    const luxbarCheckbox = document.querySelector('#luxbar-checkbox');
    const luxbarNavigation = document.querySelector('.luxbar-navigation');

    luxbarCheckbox.addEventListener('change', function () {
        if (this.checked) {
            luxbarNavigation.classList.add('active');
        } else {
            luxbarNavigation.classList.remove('active');
        }
    });
});
