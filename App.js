const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//inital questions 
managerQuestions = [
    {
        type: "input",
        name: "mName",
        message: "What is your name?",
        validate: nameInput => {
        if (nameInput) {
            return true;
            } else {
            console.log('Please enter manager\'s name!');
            return false;
            }
        }
    },

    {
        type: "input",
        name: "mEmail",
        message: "What is your email address?",
        validate: nameInput => {
            //validate email address is in correct format of _@_._
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nameInput)) {
                return true;
                } else {
                console.log('Please enter a valid email address!');
                return false;
                }
            }
    },

    {
        type: "input",
        name: "mID",
        message: "What is your ID number?",
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter manager\'s employee ID!');
                return false;
                }
            }
    },

    {
        type: "input",
        name: "officeNum",
        message: "What is your office number?",
        validate: nameInput => {
            if (nameInput) {
                return true;
                } else {
                console.log('Please enter a phone number!');
                return false;
                }
            }
    },

    {
        type: "number",
        name: "engineers",
        message: "How many engineers are on your team?"
    },

    {
        type: "number",
        name: "interns",
        message: "How many interns are on your team?"
    }
];

internQuestions = [

];

// Manager Init
async function teamGen() {
    inquirer.prompt(managerQuestions)
        .then(async function (managerData) {

            let { mName, mEmail, mID, officeNum, engineers, interns } = managerData;


            let genManager = new Manager(mName, mEmail, mID, officeNum)
            console.log(genManager);

            let eng = [];
            for (let i = 0; i < engineers; i++) {
                await inquirer.prompt([

                    {
                        type: "input",
                        name: "engineerName",
                        message: "What is the new engineer's name?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter engineer\'s name!');
                                return false;
                                }
                            }
                    },

                    {
                        type: "input",
                        name: "engineerID",
                        message: "What is new engineer's ID number?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter engineer\'s ID!');
                                return false;
                                }
                            }
                    },

                    {
                        type: "input",
                        name: "engineerEmail",
                        message: "What is new engineer's email?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter engineer\'s email!');
                                return false;
                                }
                            }
                    },

                    {
                        type: "input",
                        name: "github",
                        message: "What is new engineer's github username?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter engineer\'s github username!');
                                return false;
                                }
                            }
                    }

                ]).then((engineerData) => {

                    let { engineerName, engineerID, engineerEmail, github } = engineerData;
                    let genEngineer = new Engineer(engineerName, engineerID, engineerEmail, github)
                    console.log(genEngineer);

                    eng.push(genEngineer);
                })
            }

            let intern = [];
            for (let i = 0; i < interns; i++) {
                await inquirer.prompt([

                    {
                        type: "input",
                        name: "internName",
                        message: "What is the new Intern's name?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter intern\'s name!');
                                return false;
                                }
                            }
                    },

                    {
                        type: "input",
                        name: "internID",
                        message: "What is new Intern's ID number?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter intern\'s ID!');
                                return false;
                                }
                            }
                    },

                    {
                        type: "input",
                        name: "internEmail",
                        message: "What is new Intern's email?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter intern\'s email!')
                                return false;
                                }
                            }
                    },

                    {
                        type: "input",
                        name: "school",
                        message: "What school is the Intern from?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                                } else {
                                console.log('Please enter intern\'s school!');
                                return false;
                                }
                            }
                    }

                ]).then((internData) => {

                    let { internName, internID, internEmail, school } = internData;

                    let genIntern = new Intern(internName, internID, internEmail, school)
                    console.log(genIntern);

                    intern.push(genIntern);
                })
            }
    
    let {name, id, email, officeNumber, role} = genManager

    let managerCard = fs.readFileSync('./src/Manager.html', 'utf8');
    managerCard = managerCard.replace('{{name}}', name);
    managerCard = managerCard.replace('{{role}}', role);
    managerCard = managerCard.replace('{{id}}', id);
    managerCard = managerCard.replace('{{email}}', email);
    managerCard = managerCard.replace('{{officeNumber}}', officeNumber);
    console.log(managerCard);

    let engineerHTML = [];
    for (let i = 0; i < eng.length; i++) {

    let {name, id, email, github, role} = eng[i];

    let engineerCard = fs.readFileSync('./src/Engineer.html', 'utf8');

    engineerCard = engineerCard.replace('{{name}}', name);
    engineerCard = engineerCard.replace('{{id}}', id);
    engineerCard = engineerCard.replace('{{email}}', email);
    engineerCard = engineerCard.replace('{{github}}', github);
    engineerCard = engineerCard.replace('{{role}}', role);
    engineerHTML.push(engineerCard);

}

let internHTML = [];
for (let i = 0; i < intern.length; i++) {

    let {name, id, email, school, role} = intern[i];

    let internCard = fs.readFileSync('./src/Intern.html', 'utf8');

    internCard = internCard.replace('{{name}}', name);
    internCard = internCard.replace('{{id}}', id);
    internCard = internCard.replace('{{email}}', email);
    internCard = internCard.replace('{{school}}', school);
    internCard = internCard.replace('{{role}}', role);
    internHTML.push(internCard);

}

    let mainHtml = fs.readFileSync('./src/Employee.html', 'utf8');
    mainHtml = mainHtml.replace('{{manager}}', managerCard);
    mainHtml = mainHtml.replace('{{engineers}}', engineerHTML);
    mainHtml = mainHtml.replace('{{interns}}', internHTML);

    fs.writeFileSync('generate-page.html', mainHtml);
})

}

teamGen()


