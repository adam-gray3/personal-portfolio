
//Form Validation
const form = document.querySelector(".contact__form");
const firstName = document.querySelector(".first__name");
const lastName = document.querySelector(".last__name");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const errorMsg = document.querySelector("small");
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let errors = [];

//Show error funtion
const showError = (input, message) => {
    input.classList.add("error");
    input.nextElementSibling.textContent = message;
}

const success = (input, message) => {
    input.classList.add("success");
    input.nextElementSibling.textContent = message;
    input.nextElementSibling.nextElementSibling.style.display = "block";
}


const validateForm = () => {

    if(firstName.value === ""){
        showError(firstName, "Enter you'r first name");
        errors++;
    } else{
        success(firstName, "");
    }

    if(lastName.value === ""){
        showError(lastName, "Enter you'r last name");
        errors++;
    } else{
        success(lastName, "");
    }

    if(email.value === ""){
        showError(email, "Enter you'r email address");
        errors++;
    } else if(validEmail.test(email.value) !== true) {
        showError(email, "Enter a valid email address");
        errors++;
    } else{
        success(email, "");
    }

    if(subject.value === "" || subject.value.length < 4){
        showError(subject, "Enter a subject");
        errors++;
    } else{
        success(subject, "");
    }

    if(message.value === ""){
        showError(message, "Enter a small message");
        errors++;
    } else{
        success(message, "")
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