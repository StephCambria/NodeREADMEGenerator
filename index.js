// node modules
// using inquirer 8.2.4
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const customFunctions = require('./utils/customFunctions');
const { writeFile } = require('./utils/customFunctions');


// Description, 
// Table of Contents, 
// Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests, 
// and Questions (github profile link)


// inquirer to generate questions
const questions = [
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
            choices: ['The MIT License', 'The ISC License', 'The Mozilla License', 'The EPL License'],
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
            message: "Please provide your email.",
            name: 'email',
            // validate property to check if the user provided a value
            validate: (value) => { if (value) {return true} else {return 'Please enter a value to continue'}},
            
        },
    ]




// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(answers => {
        // Use user feedback for... whatever!!
        const markdown = generateMarkdown(answers);
        writeFile('README.md', markdown);
      })
      .catch(error => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
      });
  }
  
  // Function call to initialize app
  init();