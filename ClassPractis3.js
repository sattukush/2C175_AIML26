class Employee{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    calculateSalary(){
        return this.salary;
    }
}

let e1 = new Employee(1, "Satyam", 30000);
console.log(e1.calculateSalary());