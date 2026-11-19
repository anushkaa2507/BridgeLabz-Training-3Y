function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

let numbers = [1, 2, 3, 4];

let doubled = applyOperation(numbers, num => num * 2);
let squared = applyOperation(numbers, num => num * num);

console.log("Doubled:", doubled);
console.log("Squared:", squared);