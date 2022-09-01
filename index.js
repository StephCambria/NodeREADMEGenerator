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
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
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
            type: 'input',
            message: "Please state if there are any tests required.",
            name: 'test',
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
    ${data.description}

    ## Table of Contents:
    * [Installation] (#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contributing] (#contribute)
    * [Tests] (#test)
    * [Questions] (#questions)
    
    ### Installation:
    Node.js needs to be installed on your computer. If the project folder does not have a package.json or a package-lock.json file, please install. 
    In order to install the necessary dependencies, open the console and run the following:
    \`\`\` ${data.installations} \`\`\`

    ### Usage:
    ${data.usage}

    ### License:
    This project is licensed under:
    ${data.license}

    ### Contributing:
    ${data.contribute}

    ### Tests:
    In order to test, open the console and run the following:
    \`\`\` ${data.tests} \`\`\`

    ### Questions:
    If you have any questions, contaxt me on [GitHub](https://github.com/${data.username}) or send an email to ${data.email}
    `
}

questions().then((data) => 
writeFileAsync('generatedREADME.md', generateMD(data))).then(() => 
console.log('Successfully wrote to index.html')).catch((err) => 
console.error(err));