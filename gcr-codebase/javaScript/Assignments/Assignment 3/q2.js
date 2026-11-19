
"use strict";


const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("EMPLOYEE BONUS REPORT");
console.log("---------------------");

for (let employee of employees) {

    try {
        
        let salary = Number(employee.salary);
        let years = Number(employee.years);

        
        if (!employee.name || !Number.isFinite(salary) ||
            !Number.isFinite(years)) {
            throw new Error("Invalid employee data");
        }

        
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        let totalSalary = salary + bonus;

        console.log(`
Employee: ${employee.name}
Salary: ${salary}
Experience: ${years} years
Bonus: ${bonus}
Total Salary: ${totalSalary}
---------------------`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}
