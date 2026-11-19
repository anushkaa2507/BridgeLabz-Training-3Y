
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

console.log("TRANSACTION VALIDATION REPORT");

for (let transaction of transactions) {

    try {
        
        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        
        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("MISSING_DATA");
        }

        
        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log("Valid Transaction:", transaction.id);

    } catch (error) {

        invalid.push({
            transaction: transaction,
            reason: error.message
        });

        console.log("Invalid Transaction:", error.message);
    }
}

console.log("\nFINAL REPORT");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);
