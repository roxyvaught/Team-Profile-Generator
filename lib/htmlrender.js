    
    let { name, id, email, officeNumber, role } = genManager

    let managerCard = fs.readFileSync('./src/Manager.html', 'utf8');
    managerCard = managerCard.replace('{{name}}', name);
    managerCard = managerCard.replace('{{role}}', role);
    managerCard = managerCard.replace('{{id}}', id);
    managerCard = managerCard.replace('{{email}}', email);
    managerCard = managerCard.replace('{{officeNumber}}', officeNumber);
    console.log(managerCard);

    let engineerHTML = [];
    for (let i = 0; i < eng.length; i++) {

    let { name, id, email, github, role } = eng[i];

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

    let { name, id, email, school, role } = intern[i];

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

