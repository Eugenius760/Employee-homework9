const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const addTeam = [];

questions();

function questions() {
    return inquirer.prompt([
        {
            type: "list",
            message: "What is your employee's role?",
            name: "role",
            choices: ["Manager",
            "Engineer",
            "Intern"]
        },
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber",
            when: (answers) => answers.role === "Manager",
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "github",
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: "input",
            message: "What school does your intern attend?",
            name: "school",
            when: (answers) => answers.role === "Intern"
        }
    ])
    .then(function(data) {
        if (data.role === "Manager") {
            let newManager = new Manager(data.name, data.id, data.email, data.officeNumber);
            addTeam.push(newManager)
        }
        if (data.role === "Engineer") {
            let newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            addTeam.push(newEngineer)
        }
        if (data.role === "Intern") {
            let newIntern = new Intern(data.name, data.id, data.email, data.school);
            addTeam.push(newIntern)
        }
    })
    .then(function() {
        inquirer.prompt([
            {
                type: "list",
                message: "Are there anymore emplyees that need added?",
                name: "addEmployees",
                choices: ["Yes", "No"]
            }
        ])
        .then(function(answers) {
            if (answers.addEmployees === "Yes") {
                questions()
            } else {
                let html = render(addTeam);
                console.log(addTeam)
                fs.writeFile(outputPath, html, "utf8", function (err) {
                    if(err) {
                        return(err);
                    }
                })
            }
        })
    })
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
