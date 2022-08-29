
const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
  function renderLicenseBadge(license) {
    let licenseBadge = ('![License]()');
    if (license == "Apache Licence 2.0") {
      licenseBadge = 
      console.log (licenseBadge)
    }
    else {
      console.log ('not cool')
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (fileName,data) =>
fs.writeFile(`./${fileName.toUpperCase().split(' ').join('')}.md`, data, function (err) {
  if (err) throw err;
  console.log('Saved!');
})


module.exports = {generateMarkdown,renderLicenseBadge,renderLicenseLink,renderLicenseSection};
