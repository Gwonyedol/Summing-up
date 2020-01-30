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
const input = form.querySelector("input")


const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";

const SHOWING = "showing";


function paintGreeting(text){
    greeting.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    form.classList.remove(SHOWING);
    greeting.innerText = `Hello ${text}`
}

function handleSubmit(event){
    event.preventDefault();
    console.log(input.value);
    paintGreeting(input.value);
    saveName(input.value);
    // paintGreeting(currentValue);
    
}

function saveName(text){
    localStorage.setItem(USER_LS,text);
}


function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
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