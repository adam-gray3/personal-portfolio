
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
    hamburger.classList.add("active")
    menu.classList.add("active")
});

close.addEventListener("click", () => {
    hamburger.classList.remove("active")
    menu.classList.remove("active")
});





//Form Validation
const form = document.querySelector(".contact__form");
const firstName = document.querySelector(".first__name");
const lastName = document.querySelector(".last__name");
const email = document.querySelector(".email");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const errorMsg = document.querySelector("small");
const validEmail = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
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
        errors--;
    }

    if(lastName.value === ""){
        showError(lastName, "Enter you'r last name");
        errors++;
    } else{
        success(lastName, "");
        errors--;
    }

    if(email.value === ""){
        showError(email, "Enter you'r email address");
        errors++;
    } else if(validEmail.test(email.value) !== true) {
        showError(email, "Enter a valid email address");
        errors++;
    } else{
        success(email, "");
        errors--;
    }

    if(subject.value === "" || subject.value.length < 4){
        showError(subject, "Enter a subject");
        errors++;
    } else{
        success(subject, "");
        errors--;
    }

    if(message.value === ""){
        showError(message, "Enter a small message");
        errors++;
    } else{
        success(message, "")
        errors--;
    }
};



//On form submission prevent default and validate 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();

    if(errors > 0){
        console.log("Invalid Submission")
    } else{
        console.log("Valid Submission")
    }
});