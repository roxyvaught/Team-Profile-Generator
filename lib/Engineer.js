
const Employee = require('./Employee');

// Import Employee Properties and add/replace properties for Engineer

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    // getRole() {
    //     return "Engineer";
    // }

};

module.exports = Engineer;