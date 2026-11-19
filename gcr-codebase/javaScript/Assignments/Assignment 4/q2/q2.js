document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");

    let valid = true;

    function validate(input, errorId, regex, message) {
        let error = document.getElementById(errorId);

        if (!regex.test(input.value.trim())) {
            input.style.border = "2px solid red";
            error.textContent = message;
            error.style.color = "red";
            valid = false;
        } else {
            input.style.border = "2px solid green";
            error.textContent = "";
        }
    }

    validate(name, "nameError", /^[A-Za-z ]{3,}$/, "Enter a valid name");
    validate(email, "emailError", /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email");
    validate(phone, "phoneError", /^[0-9]{10}$/, "Enter 10 digit phone number");
    validate(password, "passwordError", /^.{8,}$/, "Password must be at least 8 characters");

    if (valid) {
        alert("Form submitted successfully!");
    }
});