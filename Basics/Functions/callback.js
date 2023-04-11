// callback function
//calling other function in one function is called callback function




const addingSum = (a,b) => {
    console.log(a + b)
    console.log("First function")
}

const displayFunction = (callback) => {   //display function call the addingSum
                                          // function 
    console.log("Second function")
    console.log("Returning other method function")
}

// displayFunction(addingSum(2,8))  
//output
/* 
10
first function
second function
Returning other method function
*/

console.log('javaScript and learn react framework')