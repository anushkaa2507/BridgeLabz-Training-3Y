const arr= [ 12, 34, true, "na"]
arr.join();
arr.pop();
const arr1= arr.slice(1, 3);
console.log(arr1);
console.log("arr", arr)
const arr2= arr.splice(1, 3)
console.log(arr2)
console.log("arr", arr)


//calculate the subtotal using ticket price x quantity 
//if the quantity is 5 or more , apply a 15% discount
//otherwise if the quantity is 3 or more apply a 10% discount
//otherwise no quantity -based discount is applied 
//if the coupon code is valid apply an addititonal 5% discount to the amount of remaining after the quantity discount
// round the final amount using math.round()
//print the subtotal, discounts, and final payable discounts
//example- if the ticket price