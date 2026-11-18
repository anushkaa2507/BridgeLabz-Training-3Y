
let totalAmount = 7500;

let discount = 0;


if (totalAmount >= 10000) {
    discount = 25;
}
else if (totalAmount >= 5000) {
    discount = 15;
}
else if (totalAmount >= 2000) {
    discount = 5;
}
else {
    discount = 0;
}


let discountAmount = (totalAmount * discount) / 100;


let finalPrice = Math.round(totalAmount - discountAmount);


console.log("Original Total: Rs." + totalAmount);
console.log("Discount: " + discount + "%");
console.log("Final Price: Rs." + finalPrice);