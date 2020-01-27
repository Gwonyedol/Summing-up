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