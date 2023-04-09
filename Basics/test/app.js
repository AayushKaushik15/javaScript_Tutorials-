

// let twoSum = (num, target) => {
//     let sum;
//     for (let i=0; i<num.length; i++) {
//         for (let j=i+1; j<num.length; j++) {

//             sum =  num[i] + num[j]

//             if (target == sum) {
//                 console.log(`${num[i]} ${num[j]}`);
//             }
//         }
//     }
//     // return sum
// }

// twoSum([2,7,11,15], 26);




let median = (num1, num2) => {

    let concatArr = num1.concat(num2);

    let mid = Math.floor((concatArr.length /2));

    console.log(concatArr[mid] + " mid element");
}

median([1,2,3], [4,5,6,7,])