const getStoredUsers = () => {
    const users = localStorage.getItem('mednexus_users');
    return users ? JSON.parse(users) : {};
};

const registerUser = (email, password) => {
    const users = getStoredUsers();
    users[email.toLowerCase()] = password;
    localStorage.setItem('mednexus_users', JSON.stringify(users));
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm') || 
                      document.getElementById('staffForm') || 
                      document.getElementById('doctorLoginForm') || 
                      document.getElementById('patientLoginForm');

    const DEFAULT_CREDENTIALS = {
        "admin@mednexus.com": "nexus2025",
        "doctor@mednexus.com": "care123",
        "staff@mednexus.com": "staff99",
        "patient@example.com": "password123"
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('email').value.trim().toLowerCase();
            const passwordInput = document.getElementById('password').value;
            
            const storedUsers = getStoredUsers();
            const isValidStored = storedUsers[emailInput] === passwordInput;
            const isValidDefault = DEFAULT_CREDENTIALS[emailInput] === passwordInput;

            if (isValidStored || isValidDefault) {
                if (loginForm.id === 'doctorLoginForm') window.location.href = "doctor.html";
                else if (loginForm.id === 'patientLoginForm') window.location.href = "patient.html";
                else if (loginForm.id === 'staffForm') window.location.href = "staff.html";
                else window.location.href = "dashboard.html";
            } else {
                alert("Access Denied: Invalid credentials. If you are new, please Sign Up first.");
            }
        });
    }
});