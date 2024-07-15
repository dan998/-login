document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    try {
        let response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        let result = await response.json();

        if (response.ok) {
            // Login successful
            window.location.href = '/dashboard.html'; // Redirect to dashboard or main page
        } else {
            // Login failed
            document.getElementById('message').textContent = result.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
