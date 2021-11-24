text = document.querySelector("#about-text");
isClicked = false;

function toogleText(informationText) {
    text.textContent = isClicked ? "𝚅𝔦𝔢𝘸 𝔟𝔞𝔠𝑘 " : informationText;

    isClicked = !isClicked;
}
var vid = document.getElementById("purples.mp3");
vid.volume = 0.2;