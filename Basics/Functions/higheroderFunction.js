// important array methods
// 1.forEach ()
// 2. map ()
// 3. filter ()
// 4. reduce ()






//FOR EACH
//not change original array

// const number = [2,3,4,5,6]

// let store = number.forEach((number, index) => {
//     console.log(`index -> ${index} number -> ${number} `)
// })

// console.log(store);


// number * by 2



// const arr_obj = [
//     {name : "ayush", age : 21},
//     {name : "mohit", age : 23},
//     {name : "golu", age : 24},
//     {name : "shubham", age : 18}
// ]
// arr_obj.forEach((value, s,number) => {
//     console.log(arr_obj[1].name)
// })





// MAP method
// it creates a new array 

const arr_map = [1,2,3,4,5];

const store = arr_map.map((value => value * value))
// console.log(store)   //[ 1, 4, 9, 16, 25 ]













// FILTER ()


const number = [2,3,4,5,6,7,8] 


const evenNumber = number.filter(number => number % 2 == 0)

// console.log(evenNumber , "Prime number")










//Reduce ()

const reduceArr = [1,2,3,4,5];

const reduce_storing = reduceArr.reduce ((adding, value) => adding += value)

// console.log(reduce_storing)

const personDetails = [
    {name : "ayush", marks : 89},
    {name : "mohit", marks : 99},
    {name : "shashank", marks : 70},
    {name : "abhay", marks : 52},
]

// const details = personDetails.reduce((adding, value) => adding += )

// console.log(details);












// SORT () METHOD
//change original array



const list = [
    {productId : 3, price : 1200},
    {productId : 2, price : 200},
    {productId : 4, price : 800},
    {productId : 1, price : 1280}
]

const lowtohight = list.sort((a,b) => {
    return a.price - b.price
});

// console.log(lowtohight)
















//find method ()

const myArr = ["hello", "Cat", "dog", "lion", "pop"]

// for(let i=0; i<myArr.length; i++) {

//     if (myArr[i].length == 3) {
//         console.log(myArr[i])
//     }
// }


const find = myArr.find((value) => value.length == 3)
// console.log(find)


const users = [
    {userID : 1, userName : "ayush"},
    {userID : 2, userName : "abhay"},
    {userID : 3, userName : "shubham"},
    {userID : 4, userName : "rohit"},
    {userID : 5, userName : "mohit"}
]

const storing_Data = users.find(value => value.userID == 3)
// console.log(storing_Data);













// Every MEthod
// in this function every method should be true or false
// if every number is true but one number is false it return false

// Example

const numberGame = [2,4,6,8,10,12,14]  //even number

const isEven = numberGame.every(number => number%2 == 0)
// console.log(isEven) //true








//some () 
//function is the opposite of every ()
// if one condition become true 
// it will return true














//iterables
// jispe hum for loops laga sake


//OBJECTS ARE NOT iterable

const name = "Ayush kaushik"

// for (let i=0; i<name.length; i++) {
//     console.log(name.charAt(i))
// }

// for (let char in name) {
//     console.log(char)
// }















//Sets 