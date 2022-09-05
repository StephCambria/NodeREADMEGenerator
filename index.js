// node modules
// using inquirer 8.2.4
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


// Description, 
// Table of Contents, 
// Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests, 
// and Questions (github profile link)

// inquirer to generate questions
const questions = () =>
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},

        },
        {
            type: 'input',
            message: "Briefly describe your application.",
            name: 'description',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            type: 'input',
            message: "How do you install your application?",
            name: 'installation',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            type: 'input',
            message: "How is your application used?",
            name: 'usage',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            // list of licenses
            type: 'list',
            message: "Which license did you use?",
            name: 'license',
            choices: ['The MIT License', 'Apache License', 'GNU License'],
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            type: 'input',
            message: "Please state if others can contribute.",
            name: 'contribute',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            type: 'list',
            message: "Is testing required?",
            name: 'test',
            choices: ['yes', 'no'],
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'username',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            type: 'input',
            message: "Please provide your GitHub profile link.",
            name: 'github',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
        {
            type: 'input',
            message: "Please provide your email.",
            name: 'email',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
    ]
);




// function to generate input data

function generateMD(data) {

    return `# ${data.title}
    ${badge}
    ##📝 Description
    ${data.description}
    ##📚 Table of Contents:
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributing] (#contribute)
    * [Tests] (#test)
    * [Questions] (#questions)
    
    ###🔧 Installation:
    Node.js needs to be installed on your computer. If the project folder does not have a package.json or a package-lock.json file, please install. 
    In order to install the necessary dependencies, open the console and run the following:
   \`\`\` npm install \`\`\`
    ###💻 Usage:
    ${data.usage}
    ###🖋 License:
    This project is licensed under:
    ${data.license}
    ###🧑‍💻 Contributing:
    ${data.contribute}
    ###👾 Tests:
    Is testing required?
    ${data.test}
    ###❔ Questions:
    If you have any questions, contact me on [GitHub](https://github.com/${data.username}) or send an email to ${data.email}
    `
}

function renderBadge(license){
    let badge = "";
    switch(license){
        case "MIT":
            return badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Apache license 2.0":
            return badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License v3.0":
            return badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        default:
            console.log("Render badge failed");
    }
    //renderBadge(license);
}



questions().then((data) => 
writeFileAsync('generatedREADME.md', generateMD(data))).then(() => 
console.log('Successfully wrote to index.html')).catch((err) => 
console.error(err));