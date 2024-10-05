document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('.register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (username === '' || email === '' || password === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Placeholder for actual registration process
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);

            // Example of sending data to a server via fetch (You can replace this with an actual API call)
            /*
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Registration successful!');
                    window.location.href = '/login.html'; // Redirect to login page
                } else {
                    alert('Registration failed: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
            });
            */
        });
    }
});
