// function verifyPayment(transactionId){
//     if(transactionId===undefined){
//         console.log("Payment failed!!")
//         return;
//     }
//     console.log("transactionId",transactionId)
//     console.log("Payment is successful")
//     return transactionId
// }

// console.log(verifyPayment())

// function addExpenses(...exp){
//     console.log("exp", exp)
//     const totalExpenses = 
//     console.log("your total expense is : ")

// }
   

// addExpenses(10, 20, 30, 40)


// const addNumbers= (a,b)=>{
//     return a+b;
// }

// const person1={
//     subscription: {
//         netflix: "gold",
//         amazonPrime: "basic"
//     },
//     show: showDetails=() => {
//         console.log("this",this)
//         console.log("this is user:"+ this.username + "age is: "+this.age)
//     }
//     // show: showDetails=() => {
//     //     console.log("this", this)
//     //     console.log("this is user:"+ this.username + "age is: "+this.age)
//     // }
    
// }
// person1.show();


// //callback functions
// function calc(num1, num2, callback){
//     return callback(num1, num2);

// }
// function add(num1, num2){
//     return num1+num2;
// }
// console.log(calc(2, 4, add))

// const numbers= [1,2,3,4,5,6]
// const multiples= numbers.map((num)=>num*2)
// console.log("multiples",multiples)
// //console.log(numbers)

// const oddNumbers = numbers.filter((num)=>num%2!=0)
// console.log(oddNumbers)

// const sumOfNumbers= numbers.reduce((acc, num)=>acc+num)
// console.log(sumOfNumbers)

// const products = [
//     { name: "Milk", price: 60, inStock: true},
//     { name: "Bread", price: 40, inStock: false},
//     { name: "Rice", price: 200, inStock: true},
//     { name:"Cheese", price: 150, inStock: true},
// ]; 

const printUserDetails=()=>{
    console.log("user data is fetched")
}
console.log(printUserDetails())

function calc(num1, num2, callback){
    console.log("callback", callback)
    return callback(num1, num2)
}
function add(val1, val2){
    return val1  + val2
}
console.log(calc(2, 4, add))