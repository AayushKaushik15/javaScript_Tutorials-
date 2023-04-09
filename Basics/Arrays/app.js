
const fruits = ["apple", "Orange", "banana"]   //simple array

// console.log(fruits[0]);  //*apple


fruits.pop()  
//remove last element from the array

// console.log(fruits);  //* ['apple', 'Orange']

fruits.push('Pineapple')  
// add element in the last index

// console.log(fruits);   //* ['apple', 'Orange', 'Pineapple']

// console.log(fruits.length); //* 3 elements in the array

fruits.shift()  
// remove first element in the array

// console.log(fruits);  //*['Orange', 'Pineapple']


fruits.unshift("lemon")
// add element in the first place


// console.log(fruits)  //*['lemon', 'Orange', 'Pineapple']
                                              //      0        1       2       3
let update = fruits.splice(2,0, "sd");       //! ['lemon', 'Orange', 'sd', 'Pineapple']
                //  splice (update, delete, add element)  
//? The splice() method adds and/or removes array elements.
//?The splice() method overwrites the original array.



// console.log(update + " removed");
// console.log(fruits);

// console.log(fruits.slice(1,3));   //['Orange', 'sd']







//                                REFERENCE Data type


//array is object type  
// if you change the element in the person
// personClone will also change the element
// because array store in heap memory 
// heap memory provide reference of the data...

const person = ['ayush', 'shashank', 'abhay', 'puneet', 'shubham']

const personClone = person

// console.log(person);   //['ayush', 'shashank', 'abhay', 'puneet', 'shubham']
// console.log(personClone);  //['ayush', 'shashank', 'abhay', 'puneet', 'shubham']








//how to clone array

//how to concatenate two arrays

let arr1 = ["Items1", "items2"];
// let arr2 = arr1.concat() // new array created


//new way
//todo spread operator
//clone created
// let arr2 = [...arr1] // new array created ['Items1', 'items2']

let arr2 = [...arr1].concat(['item3', 'item4'])   //['Items1', 'items2', 'item3', 'item4']


arr1.push("item3")
// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2);







//                            Array destructuring

const myArr = ["value1", "value2","value3", "value4","value5","value6",]
// const newmyArr = ["value4", "value5","value6"]
// let myvar1 = myArr[1];
// let myvar2 = myArr[2];



let [e1, e2, e3, ...newlyArr] = myArr

//...newlyArr rest all element add in this newlyArr
//example "value4","value5","value6",


// console.log(e1,e2, e3);  //value1 value2 value3
// console.log(newlyArr);  //['value4', 'value5', 'value6']
