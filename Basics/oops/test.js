//taking average 
const function1 = (arr1) => {

    const average = arr1.reduce((store,value) => store += value)

    let store1 = average / arr1.length
    
    console.log(`adding a group of numbers and then dividing by the count of those numbers`)
    console.log(`${average} / ${arr1.length}`)
    return store1

}

// console.log (function1([1,2,3,4,5,6]))


//taking percentage

const percentageFunction = (price, percent) => {
    
    let store  = (price * percent) / 100

    let str = store.toString();

    if (str.length >= 6) {
        if (str.charAt(0) == 1) {
            console.log(`${str} lakh`);
        }
        else {
            console.log(`${str} lakhs`);
        }
    }
    else {
        if (str.length < 6) {
            if (str.charAt(0) == 1) {
                console.log(`${str} thousand`);
            }else {
                console.log(`${str} thousands`)
            }
        }
    }
    
}

// percentageFunction(1000000, 90)


