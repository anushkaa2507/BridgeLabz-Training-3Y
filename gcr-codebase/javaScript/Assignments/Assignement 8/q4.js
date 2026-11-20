
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name, "is doing general work.");
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overriding parent method
    work() {
        console.log(this.name, "is managing the team.");
    }
}

let emp = new Employee("Rahul", "IT");
let manager = new Manager("Anushka", "HR");

// Runtime polymorphism
let employees = [emp, manager];

employees.forEach(person => {
    person.work();
});
