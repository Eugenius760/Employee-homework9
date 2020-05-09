// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
        console.log(`This employee's name is ${this.name}`)
    }

    getId() {
        return this.id;
        console.log(`This employee's ID is ${this.id}`)
    }

    getEmail() {
        return this.email;
        console.log(`This employee's name is ${this.email}`)
    }

    getRole() {
        return "Employee"
    }
}
module.exports = Employee