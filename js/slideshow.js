const slideItems = [
    {
        id: 0,
        title: "SASS Snippet", 
        text: `<p>This is a code snippet from my Netmatters homepage build,
        using SASS I created a map for different colours for the 
        social icons I wanted to display. I then looped over the map 
        with a loop and created new classes, then I just 
        had to add the correct class to the icon within my HTML. </p>
        <span><a href="#">Live project here!</a></span>
        <span><a href="https://github.com/adam-gray3/netmatters-homepage" target="_BLANK">GitHub Repo!</a></span>`, 
        image: "images/sass-snippet.jpg",
    }, {
        id: 1,
        title: "JavaScript Snippet", 
        text: `<p>This is a code snippet from my portfolio site, showing the functionaility of the hamburger menu for smaller devices. Selected DOM elements
                using query selector and applied event listeners to the hamburger and close buttons. I have then used classlist to add or remove the correct class for each element.</p>
        <span><a href="index.html">Live project here!</a></span>
        <span><a href="https://github.com/adam-gray3/personal-portfolio" target="_BLANK">GitHub Repo!</a></span>`, 
        image: "images/js-menu.jpg", 
    }
];

let currentSlide = 0;
const nxtBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slideText = document.querySelector(".container__card__text");
const image = document.querySelector(".slide-img");
const title = document.querySelector(".title");
const bulletList = document.querySelector(".bullets ul");
const duration = 6000;

//Update slide content function
const showSlide = () => {
    slideText.innerHTML = slideItems[currentSlide].text;
    image.src = slideItems[currentSlide].image;
    title.textContent = slideItems[currentSlide].title;
    bulletUpdate()
};

//Create each bullet dynamically 
slideItems.forEach(slide => {
    const bullet = document.createElement("li");
    bulletList.append(bullet);
});

const nxtSlide = () => {
    currentSlide++;
    if(currentSlide > slideItems.length - 1){
      currentSlide = 0;
    }
    showSlide();
    clearInterval(autoSlide);
    autoSlide = setInterval(nxtSlide, duration);  
    bulletUpdate();
};

const prevSlide = () => {
    currentSlide--;
    if(currentSlide < 0){
      currentSlide = slideItems.length - 1;
    }
    showSlide();
    clearInterval(autoSlide);
    autoSlide = setInterval(nxtSlide, duration);
    bulletUpdate();
};

//Auto run slider
let autoSlide = setInterval(nxtSlide, duration);

//EVENT LISTENERS FOR BUTTONS
nxtBtn.addEventListener("click", nxtSlide);
prevBtn.addEventListener("click", prevSlide);

//Change bullet with slide
const bulletUpdate = () => {
    const bullets = document.querySelectorAll(".bullets li");
    bullets.forEach((bullet, i) => {
        bullet.classList.remove("active")
        bullet.id = i;
        if(i === currentSlide){
            bullet.classList.add("active")
        }
    })
};

bulletList.addEventListener("click", (e) => {
    //Convert id to number from string to match index
    currentSlide = +e.target.id;
    showSlide();
    bulletUpdate();
    clearInterval(autoSlide);
    autoSlide = setInterval(nxtSlide, duration);  
});

bulletUpdate();
