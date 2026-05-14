const preloader = document.getElementById("preloader");
const intro = document.getElementById("intro");
const gate = document.getElementById("gate");
const locked = document.getElementById("locked");
const shop = document.getElementById("shop");

const video = document.getElementById("introVideo");

const accessOverlay = document.getElementById("accessOverlay");
const accessBtn = document.getElementById("accessBtn");

const submitPassword = document.getElementById("submitPassword");

const successMessage = document.getElementById("successMessage");

const ambientAudio = document.getElementById("ambientAudio");

const cursor = document.querySelector(".custom-cursor");

const timer = document.getElementById("timer");

/*
DROP SETTINGS
*/

const dropLive = false;

const password = "VOID2026";

/*
CUSTOM CURSOR
*/

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/*
PRELOADER
*/

setTimeout(() => {

    preloader.classList.add("hidden");
    intro.classList.remove("hidden");

}, 2500);

/*
INTRO VIDEO
*/

video.addEventListener("ended", () => {

    video.pause();

    setTimeout(() => {

        accessOverlay.classList.add("show");

    }, 500);

});

/*
ACCESS
*/

accessBtn.addEventListener("click", () => {

    intro.classList.add("hidden");
    gate.classList.remove("hidden");

    ambientAudio.volume = 0.25;
    ambientAudio.play();

});

/*
PASSWORD
*/

submitPassword.addEventListener("click", () => {

    const entered = document.getElementById("password").value;

    if(entered !== password){

        alert("INVALID PASSWORD");
        return;

    }

    successMessage.innerText = "ACCESS GRANTED";
    successMessage.classList.add("show");

    setTimeout(() => {

        gate.classList.add("hidden");

        if(dropLive){

            shop.classList.remove("hidden");

        }else{

            locked.classList.remove("hidden");

        }

    }, 1800);

});

/*
COUNTDOWN
*/

const dropDate = new Date("2026-08-01T00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = dropDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    timer.innerText =
        days + "D " +
        hours + "H " +
        minutes + "M";

},1000);