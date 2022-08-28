// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create a function to initialize app
const questions = () => {
    // TODO: Create an array of questions for user input
    return inquirer.prompt([
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project name? (Required)',
        validate: nameInput => {
          if (nameInput) {
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
        name: 'usage',
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
        name: 'licence',
        message: 'Please choose a licence for your application (Required)',
        choices: ['Apache Licence 2.0', 'GNU GPLv2','GNU GPLv3', 'MIT', 'ISC'],
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
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// Function call to initialize app
questions();
