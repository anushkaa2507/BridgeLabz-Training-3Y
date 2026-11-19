let userName = "Anushka";
let age = 20;
let isStudent = true;
let subjects = ["Java", "Python", "JavaScript"];
let student = { name: "Anushka", age: 20 };
let address = null;
let result;

let data = [
    { Label: "String", Value: userName, Type: typeof userName },
    { Label: "Number", Value: age, Type: typeof age },
    { Label: "Boolean", Value: isStudent, Type: typeof isStudent },
    { Label: "Array", Value: subjects, Type: Array.isArray(subjects) ? "Array" : typeof subjects },
    { Label: "Object", Value: student, Type: typeof student },
    { Label: "Null", Value: address, Type: "null" },
    { Label: "Undefined", Value: result, Type: typeof result }
];

console.table(data);