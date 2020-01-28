/*
const title = document.getElementById("title");
console.log(title);


//자바스크립트는 HTML의 모든 요소를 가져올 수 있다
//그것을 객체로 바꿀 것이다.


title.innerHTML = "i am a starter";

console.dir(title);

title.style.color = "skyblue";
document.title = "Nothing";

*/
/*
const title2 = document.querySelector("#title");

function handleClick(){
    title2.style.color = "blue";
}

window.addEventListener("click",handleClick);
//handleClick -> 함수를 호출해라 필요한 시점에
//handleClick()-> 지금 호출하세요
*/

/*
const age = prompt("How old are you");
console.log(age);


if(age>20){
    console.log("you can drink");
}else{
    console.log("you can't");
}
*/
/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "blue";

function handleClick() {
    const currentColor = title.style.color;
    console.log(currentColor);
    if(currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter",handleClick);
}
init();
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
    이 코드와 같은것이 toggle
    */

    title.classList.toggle(CLICKED_CLASS);
    
}

function init() {
    title.addEventListener("click",handleClick);
}
init();