
let salary = 30000;
let incrementRate = 10;

let salaryData = [];


for (let year = 1; year <= 5; year++) {

  
    salary += salary * (incrementRate / 100);


    salaryData.push({
        Year: year,
        Salary: Math.round(salary)
    });
}
console.table(salaryData);