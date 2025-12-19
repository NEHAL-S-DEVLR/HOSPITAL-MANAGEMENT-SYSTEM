/**
 * MedNexus Secure Authentication
 * This script ensures the user is "legit" before showing navigation options.
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const roleSelection = document.getElementById('roleSelection');

    // Legit Credentials Database (Mock)
    const VALID_CREDENTIALS = {
        "admin@mednexus.com": "nexus2025",
        "doctor@mednexus.com": "care123",
        "staff@mednexus.com": "staff99"
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Check if user exists and password matches
            if (VALID_CREDENTIALS[email] && VALID_CREDENTIALS[email] === password) {
                // SUCCESS
                alert("Login Successful! Please select your role.");
                
                // Hide the login form and show the roles
                loginForm.style.display = 'none';
                roleSelection.classList.remove('hidden-roles');
                
            } else {
                // FAILURE
                alert("Access Denied: Invalid User ID or Password.");
                document.getElementById('password').value = ""; // Clear password for security
            }
        });
    }
});