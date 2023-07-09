//TYPING EFFECT
const outputText = document.querySelector(".text");
const outputTitle = document.querySelector(".title");
const displayText = `Cambridgeshire based Junior Web Developer, check out my portfolio below!`;
const displayTitle = `Adam Gray`;
let i = 0;
let j = 0;

const typeTitle = () => {
    if(i < displayTitle.length){
        outputTitle.innerHTML += displayTitle[i];
        outputTitle.classList.add("blink")
        i++;
        setTimeout(typeTitle, 150)
    }
    if(i == displayTitle.length){
        outputTitle.classList.remove("blink")
    }
};

const typeText = () => {
    if(j < displayText.length){
        outputText.innerHTML += displayText[j];
        outputText.classList.add("blink")
        j++;
        setTimeout(typeText, 90)
    }
};

const typeEffect = () => {
    setTimeout(typeTitle, 300)
    setTimeout(typeText, 1750)
}

typeEffect();


