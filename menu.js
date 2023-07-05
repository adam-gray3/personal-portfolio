
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");
const links = document.querySelectorAll(".mobile-menu li");

const closeMenu = () => {
    hamburger.classList.remove("active")
    menu.classList.remove("active")
};

hamburger.addEventListener("click", () => {
    hamburger.classList.add("active")
    menu.classList.add("active")
});

//CLOSE MENU WHEN X IS CLICKED 
close.addEventListener("click", () => {
    closeMenu();
});

//CLOSE MENU WHEN NAV LINKS CLICKED 
links.forEach(link => {
    link.addEventListener("click", closeMenu)
});
