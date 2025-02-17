document.addEventListener("DOMContentLoaded", function() {
    // Handle Registration
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("registerName").value;
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            const user = { name, email, password };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Registration successful! Please log in.");
            window.location.href = "login.html";
        });
    }

    // Handle Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
                alert("Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    // Handle Dashboard
    const userNameDisplay = document.getElementById("userName");
    if (userNameDisplay) {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            userNameDisplay.textContent = loggedInUser.name;
        } else {
            alert("You need to log in first!");
            window.location.href = "login.html";
        }
    }

    // Handle Logout
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("loggedInUser");
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }
});
