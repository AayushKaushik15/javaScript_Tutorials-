//functions... in javaScript
// functions store bunch of codes,method,parameters,variables and etc



//function declaration

const findElement = (array1, target) => {

    for (let i=0; i<array1.length; i++) {
        
        if (array1[i] == target) {
            return `the number in the array`
        }
        
    }
    return -1;
       
}

// console.log(findElement([1,2,3,4], 2))









//function expression

const song = function () {
    console.log("hi");
}

// song();









//arrow functions


const arrowFunction = () => {
    return "hi"
}

const isEven = (number) => number % 2 === 0;

// console.log(isEven(2));

// function arrowFunction () {    //you cannot make same make function
//     return "hello"
// }

// console.log(arrowFunction());
















///                                                HOSTING


//function declaration
// hello();  //this will give the output

function hello () {
    console.log("hello world");
}

//function expression
// hello2()    // this will not give output

var hello2 = function () {
    console.log("hello javaScript");
}






//                                                  Lexical Scoping

/*
In a programming language, scope refers to the area where a function or 
variable is visible and accessible to other code. Below are some common 
terms associated with scope:

Global scope refers to a global or public space.
Local scope refers to a local or restricted region.
Scope chain refers to the unique spaces that exist from the scope where a 
variable was called to the global scope.
*/


function app() {
    const myVar= "value1"

    function myFun(){
        const myVar = 89;
        console.log("first Function");
    }
    const myFun1 = function () {}
    const myFun2 = () => {}

    console.log(myVar);
    myFun()
}

// app()

















//                                                                  DEfault parameters

function sum (a,b = 5) {
    if (typeof sum == "undefined") {
        b = 5
    }
    return a * b;
}

// console.log(sum(2));














//                                     Rest parameters


function myFun(a,b,...c) {
    console.log(`${a}`);
    console.log(`${b}`);
    console.log(`${c}`);
}

// myFun(2,3,4,5,6,7,7,8,9,0)

// ...c become array 
//typeof array is OBJECT>
//all rest value goes to c this is known rest parameters























//                                                  Function returning function


const returnFunction = () => {

    const myFunction1 = () => "hi"

    return myFunction1;

}

let display = returnFunction();

// console.log(display())    //hi
 







//                                           parm destrructuring

// const person = {
//     name  : "aayush",
//     age : 24,
//     gender : "male"

// }

function printDetails (obj) {
    console. log(obj. firstName);
    console. log(obj. gender);
}

// function personDetails({name, age, gender}) {
//     console.log(name)
//     console.log(age)
//     console.log(gender)
// }

// console.log(person)