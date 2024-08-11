document.addEventListener('DOMContentLoaded', function () {
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
});
