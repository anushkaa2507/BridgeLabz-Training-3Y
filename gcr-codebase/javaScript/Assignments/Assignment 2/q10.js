const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];
for (let department of departments) {

    let name = department[0];
    let score = department[1];

    console.log("Department:", name);
    console.log("Score:", score);

    if (score >= 90) {
        console.log("Performance: Excellent");
    }
    else if (score >= 75) {
        console.log("Performance: Good");
    }
    else if (score >= 60) {
        console.log("Performance: Average");
    }
    else {
        console.log("Performance: Needs Improvement");
    }

    console.log("-------------------");
}
