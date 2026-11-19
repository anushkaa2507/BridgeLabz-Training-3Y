
"use strict";

let rows = 5;

if (typeof prompt === "function") {
    let input = prompt("Enter number of rows (default 5):");

    if (input !== null && input.trim() !== "") {
        let value = Number(input);

        if (Number.isInteger(value) && value > 0) {
            rows = value;
        } else {
            console.log("Invalid input. Using default 5.");
        }
    }
}


for (let i = 1; i <= rows; i++) {

    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}
