document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    let errorMessages = [];
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validate Name
    if (name.trim() === '') {
        errorMessages.push('Name is required.');
    }

    // Validate Email
    if (email.trim() === '') {
        errorMessages.push('Email is required.');
    } else if (!validateEmail(email)) {
        errorMessages.push('Email is not valid.');
    }

    // Validate Password
    if (password.trim() === '') {
        errorMessages.push('Password is required.');
    } else if (password.length < 6) {
        errorMessages.push('Password must be at least 6 characters long.');
    }

    // Validate Confirm Password
    if (confirmPassword.trim() === '') {
        errorMessages.push('Confirm Password is required.');
    } else if (confirmPassword !== password) {
        errorMessages.push('Passwords do not match.');
    }

    // Display Error Messages
    let errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = '';

    if (errorMessages.length > 0) {
        errorMessages.forEach(function(message) {
            let p = document.createElement('p');
            p.textContent = message;
            errorMessagesDiv.appendChild(p);
        });
    } else {
        alert('Form submitted successfully!');
        // You can proceed with form submission or further processing
    }
});

// Email Validation Function
function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
