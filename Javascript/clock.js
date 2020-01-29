const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1")

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours =date.getHours();
    const seconds = date.getSeconds();
    // clockContainer.innerHTML = hours+":"+minutes+":"+seconds;
    clockContainer.innerHTML = `${hours < 10 ? `0${hours}`:hours}:${minutes}:${seconds<10 ? `0${seconds}`:seconds}`;
}

const form = document.querySelector(".js-form")
const input = form.querySelector("form")

const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";

const SHOWING = "showing";


function paintGreeting(text){
    greeting.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    getTime();
    setInterval(getTime,1000);
    loadName();

}

init();


//setInterval(함수,실행할시간간격)