
//Form Validation
const form = document.querySelector(".contact__form");
const firstName = document.querySelector(".first__name");
const lastName = document.querySelector(".last__name");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const final = document.querySelector(".final");
const errorMsg = document.querySelector("small");
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let errors = [];

const showError = (input, message) => {
    input.classList.add("error");
    input.nextElementSibling.textContent = message;
}

const showSuccess = (input, message) => {
    input.classList.add("success");
    input.nextElementSibling.textContent = message;
    input.nextElementSibling.nextElementSibling.style.display = "block";
}

//Validate each input field except email
const validateInput = (input, message) => {
    if(input.value === ""){
        showError(input, message);
        errors++;
    } else{
        showSuccess(input, "");
    }
};

const validateForm = () => {
    validateInput(firstName, "Enter you'r first name");
    validateInput(lastName, "Enter you'r last name");
    validateInput(subject, "Enter a subject");
    validateInput(message, "Please enter a short message");

    //Validate email with regex
    if(email.value === ""){
        showError(email, "Enter you'r email address");
        errors++;
    } else if(validEmail.test(email.value) !== true) {
        showError(email, "Enter a valid email address");
        errors++;
    } else{
        showSuccess(email, "");
    }

    //Honeypot field 
    if(final.value){
        alert("Not human");
        return false;
    }
};

//On form submission prevent default and validate 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();

    if(errors > 0){
        console.log("Invalid Submission");
        errors = 0;
    } else{
        console.log("Valid Submission")
    }
});