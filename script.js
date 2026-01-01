// 1. Define the correct credentials
const VALID_USER = "admin";
const VALID_PASS = "1234";

// 2. Get HTML Elements
const loginForm = document.getElementById('loginForm');
const dashboardView = document.getElementById('dashboardView');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('errorMsg');

// 3. Login Function
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from refreshing

    // Check if inputs match the hardcoded credentials
    if (usernameInput.value === VALID_USER && passwordInput.value === VALID_PASS) {
        // SUCCESS: Hide form, Show dashboard
        loginForm.style.display = 'none';
        dashboardView.style.display = 'block';
    } else {
        // FAILURE: Show error message
        errorMsg.style.display = 'block';
        
        // Shake animation effect for wrong password
        const loginBox = document.querySelector('.login-box');
        loginBox.style.transform = 'translateX(10px)';
        setTimeout(() => { loginBox.style.transform = 'translateX(-10px)'; }, 100);
        setTimeout(() => { loginBox.style.transform = 'translateX(0)'; }, 200);
    }
});

// 4. Logout Function
function logout() {
    dashboardView.style.display = 'none';
    loginForm.style.display = 'block';
    usernameInput.value = "";
    passwordInput.value = "";
    errorMsg.style.display = 'none';
}