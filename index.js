// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const writeFile = require ('./utils/generateMarkdown');

var licenseLink = '';

// TODO: Create a function to initialize app
const questions = (data) => {
    // TODO: Create an array of questions for user input
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project name? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a decription of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions (Not Required)',
      },
      {
        type: 'input',
        name: 'useage',
        message: 'Please enter useage information (Not Required)',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines (Not Required)',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions (Not Required)',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose a licence for your application (Required)',
        choices: ['Apache License 2.0', 'GNU GPLv2','GNU GPLv3', 'MIT', 'ISC'],
        validate: licenceCheckbox => {
            if (licenceCheckbox) {
              return true;
            } else {
              console.log('Please choose a licence!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter your username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'image',
        message: 'What is the image name and extenstion for your screenshot?',
      },
    ]).then(({
      title,
      description,
      installation,
      useage,
      contribution,
      test,
      license,
      username,
      email,
      image,
    })=>{

    //template
    const template = 
`
# ${title}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Useage](#useage)
* [How to Contribute](#How-to-Contribute)
* [License](#License)
* [Test](#Test)
* [Questions](#Questions)

## Installation
${installation}

## Useage
${useage}

## How to Contribute
${contribution}

## License 
${license}

## Test
${test}

## Questions?
* Github: ${username}
* https://github.com/${username}

* Please email me with questions!
* ${email}

## Screenshot
![website-image](https://github.com/${username}/${title}/blob/main/images/${image}?raw=true)`;

    writeFile.generateMarkdown(template);
    writeFile.renderLicenseBadge(template, license);
    writeFile.renderLicenseSection(license, username);    
})}

questions()






