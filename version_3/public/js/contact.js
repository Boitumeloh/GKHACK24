document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For demonstration, simulate form submission
        if (name && email && message) {
            alert(`Thank you, ${name}. We have received your message.`);
            contactForm.reset(); // Reset the form after submission
        } else {
            alert('Please fill in all fields.');
        }
    });
});
