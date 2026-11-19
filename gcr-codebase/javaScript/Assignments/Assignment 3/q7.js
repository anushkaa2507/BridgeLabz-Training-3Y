
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];

const num1 = 25;
const num2 = 0;


class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

console.log("SMART CALCULATOR REPORT");
console.log("-----------------------");

for (let operation of operations) {

    try {
        let result;

        switch (operation) {

            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = Math.pow(num1, num2);
                break;

            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot find root of negative number");
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError("Invalid operation");
        }

        console.log(`${operation}: ${result}`);

    } catch (error) {
        console.log(`${operation}: Error - ${error.message}`);
    }
}
