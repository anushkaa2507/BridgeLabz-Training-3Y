
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let errors = [];
let under18 = [];

console.log("JSON AUDIT REPORT");
console.log("-----------------");

for (let i = 0; i < rawData.length; i++) {

    try {
        let user = JSON.parse(rawData[i]);

        if (user.user === undefined || user.age === undefined) {
            throw new Error("Missing user or age property");
        }

        user.age = Number(user.age);

        if (!Number.isFinite(user.age) || user.age < 0) {
            throw new Error("Invalid age");
        }

        cleanData.push(user);

        console.log(`Line ${i + 1}: Valid JSON`);

        if (user.age < 18) {
            under18.push(user);
        }

    } catch (error) {

        errors.push({
            line: i + 1,
            reason: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

console.log("\nFINAL REPORT");
console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Valid Count:", cleanData.length);
console.log("Invalid Count:", errors.length);
console.log("Under 18 Users:", under18);
