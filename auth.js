/**
 * MedNexus Authentication Logic
 * Handles login for both login.html (Button-based) 
 * and welcomeback.html (Dropdown-based)
 */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // Prevent the default form submission to handle via JS
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const roleSelect = document.getElementById('role');

            // 1. Basic Validation
            if (!email || !password) {
                alert("Please enter both your credentials.");
                return;
            }

            // 2. Logic for welcomeback.html (Dropdown Role Selection)
            if (roleSelect) {
                const selectedRole = roleSelect.value.toLowerCase();
                handleRoleRedirection(selectedRole);
            } 
            // 3. Logic for login.html 
            // Since login.html uses specific <a> tags for roles, 
            // this script can also be used to validate credentials before clicking links.
            else {
                // If it's the standard login.html, we assume the user 
                // fills credentials and then clicks a specific role button.
                console.log("Credentials entered. Please select your role using the buttons below.");
            }
        });
    }

    // Role-Based Redirection Logic
    function handleRoleRedirection(role) {
        console.log(`Authenticating ${role}...`);
        
        // Mock authentication delay for realism
        setTimeout(() => {
            if (role.includes('admin')) {
                window.location.href = 'staff.html';
            } else if (role.includes('doctor') || role.includes('physician')) {
                window.location.href = 'doctor.html';
            } else if (role.includes('patient')) {
                window.location.href = 'patient.html';
            } else if (role.includes('nurse') || role.includes('staff') || role.includes('pharmacist')) {
                window.location.href = 'staff.html';
            } else {
                alert("Role not recognized. Please contact IT support.");
            }
        }, 800);
    }
});

// Handling the specific buttons in login.html
// This ensures that even if they just click the button, we check if they filled the form
const roleButtons = document.querySelectorAll('a[href$=".html"]');
roleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const emailInput = document.getElementById('email');
        if (emailInput && !emailInput.value) {
            e.preventDefault();
            alert("Please enter your Email/User ID before selecting a role.");
        }
    });
});