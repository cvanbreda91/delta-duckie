// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
var title = "";
var description = "";
var installation = "";
var useage = "";
var contribution = "";
var test = "";
var license = "";
var username = "";
var email = "";

const writeFile = () =>
fs.writeFile(title+'.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
})


// TODO: Create a function to initialize app
const questions = () => {
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
    ]).then(answers => {
      title = answers.title;
      description = answers.description;
      installation= answers.installation;
      useage = answers.useage;
      contribution = answers.contribution;
      test = answers.test;
      license = answers.license;
      username = answers.username;
      email = answers.email;
    });
}

questions()
.then (writeFile);
