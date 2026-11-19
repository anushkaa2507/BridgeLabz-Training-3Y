
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

console.log("DYNAMIC DATA PARSER REPORT");
console.log("--------------------------");

for (let value of apiData) {

    
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("\nOriginal Value:", value);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);

    
    if (value === undefined || value === " " ||
        (typeof value === "string" && value.trim() === "") ||
        isNaN(num)) {

        invalidNumbers.push(value);
        console.log("Status: Invalid Number");

    } else {
        validNumbers.push(num);
        console.log("Status: Valid Number");
    }
}

console.log("\nFINAL REPORT");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
