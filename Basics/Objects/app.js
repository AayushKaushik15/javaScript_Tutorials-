

//Object reference type
//arrays are good but not sufficient
//for real world data
// object store key value pair
// object don't have index


//how to create objects


const key = "email"

const personDetails = {

//  key  :  value ==> pair use in objects  
    name : "Ayush",
    age : 21,
    city : "Delhi",

    // array inside object
    "hobbies" : ["singing", "gaming" , "guitar"]
}



//In js objects all keys are string by default so we don't need to use  " " 
// console.log(personDetails["name"]);  //Ayush





// console.log(typeof personDetails);     //object
// console.log(personDetails);     //{name: 'Ayush', age: 21, city: 'Delhi'}



//you can access this type of key like this
// "hobbies" : ["singing", "gaming" , "guitar"]

//EXAMPLE

// console.log(personDetails["hobbies"]);  //['singing', 'gaming', 'guitar']   




personDetails.gender = "male"   // add key value in object
// console.log(personDetails.gender)  //male


//const key = email 
//COmputed Properties
personDetails[key] = "google@gmail.com";
// console.log(personDetails.email);




//TO get Keys only
// console.log(Object.keys(personDetails));





//TO get values only
// console.log(Object.values(personDetails));

 



//LOOPS to ITERATE OBJECTS

for (let i=0; i<Object.keys[personDetails]; i++) {
    // console.log(personDetails);
}







// COmputed Properties

const key1 = "object1";
const key2 = "object2";

const value1 = "myvalue1"
const value2 = "myvalue2"

const obj = {
    [key1] : value1
}

//we can achieve through also
// console.log(obj[key1] = value1);

// console.log(obj);    //{object1: 'myvalue1'}





//                                       spread operators in Objects




const obj1 = {
    name: "shashank",
    age : 26
}

const obj2 = {
    name : "ayush",
    age : 26,
    city : "delhi",
    address : "ASdas"
}

const obj3 = {...obj1, ...obj2}  // cloning


// console.log(obj3);   //{name: 'ayush', age: 26, city: 'delhi', address: 'ASdas'}


//                              CONVERT arrays into objects


const arr_O = ["do", "not", "code", "while" , "eating"]


const object_active = {
    fist_name : "Ayush",
    last_name : "kaushik",
    age : 21,
}
