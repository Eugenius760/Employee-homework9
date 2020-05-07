// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`This employee's name is ${this.name}`)
    }

    getId() {
        console.log(`This employee's ID is ${this.id}`)
    }

    getEmail() {
        console.log(`This employee's name is ${this.email}`)
    }
}

const e = new Employee("Darryl", 1134, "new@new.com")
e.getName()
module.exports = Employee