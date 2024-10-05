// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Basic validation (you can expand this as needed)
            if (email === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }

            // For demonstration purposes, we'll just log the values
            console.log('Email:', email);
            console.log('Password:', password);

            // Placeholder for actual login process (e.g., API call)
            // You can use fetch or axios to send a login request to your server
            // Example:
            /*
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Redirect to another page or update the UI
                    window.location.href = '/dashboard.html';
                } else {
                    alert('Login failed: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
            */
        });
    }
});

