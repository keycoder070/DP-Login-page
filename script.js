const form = document.querySelector("form");

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const emailError = email.parentElement.querySelector(".error");
const passwordError = password.parentElement.querySelector(".error");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid = true;

    // Email validation
    if (email.value.trim() === "") {
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Password validation
    if (password.value.trim() === "") {
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (valid) {
        alert("Login successful!");
    }

});