// console.log("I'm hungry but i don't eat something");

// let b=a-5; //만든변수를 사용할땐 변수타입 안적음
// const a=221;
// console.log(b);

/*
//String
const what = "GwonYeDol"; //일단 첫선언은 const로
console.log(what);

//Boolean
const wat = false;

//Number
const num = 111;

//Float
const num2 = 12.12;
console.log(num2);
*/

/*
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

//Array
const daysOfWeek= ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek); 
console.log(daysOfWeek[22]);
*/

/*
//Object
const yedolInfo = {
    name:"yedol",
    age:"9",
    gender:"cat-boy",
    isCute:true,
    favMovies: ["고양이의보은","냥냥펀치"],
    favFood: [
        {name:"물고기", fatty:false},
        {name:"츄르", fatty:true}]
}
yedolInfo.age="10";
console.log(yedolInfo);
*/
//console.log(console);

//function is function
//한 코드의 조각으로 네가 원하는만큼 쓸 수있는 코드
//console.log("hello");
/*
function speak(name,age) {
    console.log("hi",name,"you have",age);
}

speak("예돌",123);
*/
//argument 매개변수는 우리가 주는 값이고 그걸 저장할것이다


/*
function sayHello(name,age){
    console.log(`Hello ${name} you are ${age} years old`);
}

const greetYedol = sayHello("예돌",9);

console.log();
*/
//변수와 네가 적고자하는 string을 섞기위해?
/*
function sayHello(name,age){
    return `Hello ${name} you are ${age} years old`;
}

const greetYedol = sayHello("예돌",9);
console.log(greetYedol);
*/

const calculator = {
    plus: function (a,b) {
        return a+b;
    }
}

const plus = calculator.plus(5,10);
console.log(plus);