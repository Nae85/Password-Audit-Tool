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
    console.log(userPassword);
});
