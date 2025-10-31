console.log("JavaScript is connected!");  // Connects to HTML

// This section will be selecting all the parts that needs javascript this specifically targets the form section in HTML, step 1 after connecting to html
const form = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const resultsDiv = document.getElementById('results');

// This is for f12 in console, in Javascript you have to connect each element you'll be working with
console.log(form);
console.log(passwordInput);
console.log(resultsDiv);

// This section collects the input value that is going into the password checker
form.addEventListener('submit', function(buttonEvent) {
    buttonEvent.preventDefault();
    console.log("Form submitted!");  // This is to check if the form is working
    let userPassword = passwordInput.value;
    let strength = checkPasswordStrength(userPassword);
    console.log(strength);
    console.log(userPassword);
});

// This section will check the password strength
function checkPasswordStrength(password) {
    let score = 0;
    if(password.length >= 12) {
        score = score + 1;
    }
    if(/[A-Z]/.test(password)) {
        score = score + 1;
    }
    if(/[a-z]/.test(password)) {
        score = score + 1;
    }

    if(/[0-9]/.test(password)) {
        score = score + 1;
    }
    if (/[!@#$%^&*()]/.test(password)) {
        score = score + 1;
    }
   if (score <= 2) {
    return "Weak";
} else if (score <= 4) {
    return "Medium";
} else {
    return "Strong";
}
}
