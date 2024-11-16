// Form validation function
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Toggle navigation menu for mobile view
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
}
// scripts.js
document.getElementById('toggle-button').addEventListener('change', function() {
    const body = document.body;
    const toggleStatus = document.getElementById('toggle-status');

    if (this.checked) {
        body.classList.add('dark-mode');
        toggleStatus.textContent = 'Dark Mode ON';
    } else {
        body.classList.remove('dark-mode');
        toggleStatus.textContent = 'Dark Mode OFF';
    }
});

