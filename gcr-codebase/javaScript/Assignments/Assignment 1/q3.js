let expenses = {
    food: 5000,
    travel: 2000,
    rent: 10000,
    bills: 1500,
    leisure: 1000
};
let total = 0;

total += expenses.food;
total += expenses.travel;
total += expenses.rent;
total += expenses.bills;
total += expenses.leisure;

let average = total / 5;

let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;


console.log("Total Expenses: Rs." + total.toFixed(2));
console.log("Average Expenses: Rs." + average.toFixed(2));
console.log("Tax Amount: Rs." + tax.toFixed(2));
console.log("Final Amount: Rs." + finalAmount.toFixed(2));