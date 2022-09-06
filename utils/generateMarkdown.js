

// Create a function that returns a license badge based on which license is passed in
// switch statements for the badges
function renderBadge(license){
    switch(license){
        case 'The MIT License':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'The ISC License':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'The Mozilla License':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'The EPL License':
            return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;
        default:
            console.log("Render badge failed");
    }
    console.log(license);
}

// TODO: Create a function that returns the license link
function licenseLink(license) {
    switch(license) {
        case 'The MIT License':
            return '(https://opensource.org/licenses/MIT)';
            break;
        case 'The ISC License':
            return '(https://opensource.org/licenses/ISC)';
            break;
        case 'The Mozilla License':
            return '(https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'The EPL License':
            return '(https://opensource.org/licenses/EPL-1.0)';
            break;
        default:
            console.log("Render license link failed");
    }
    console.log(license);
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let licenseBadge = renderBadge(data.license);
    //let licenseLink = licenseLink(data.license);
  
    return `
  # ${data.title}
  ${licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  * Link for more information: ${licenseLink}
  ## Contributing
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  * Questions? Visit my GitHub: [${data.questions}](https://github.com/${data.username}) 
  * With additional questions, feel free to email me at: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;