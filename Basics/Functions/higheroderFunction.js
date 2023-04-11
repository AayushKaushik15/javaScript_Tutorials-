// important array methods
// 1.forEach ()
// 2. map ()
// 3. filter ()
// 4. reduce ()






//FOR EACH
//not create new array

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

const details = personDetails.reduce((adding, value) => adding += personDetails.marks)

console.log(details);