
const Employee = require('./Employee')

// Import Employee Properties and add/replace properties for Intern

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;