let marks = [90, 85, 78, 88, 92];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}


let average = total / 5;
let percentage = (total / 500) * 100;


let failed = marks.some(mark => mark < 35);


console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Percentage:", percentage + "%");


if (failed || percentage < 50) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}