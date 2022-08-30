
const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(template, license) {
    if (license == "Apache Licence 2.0") {
      fs.writeFile(`./README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/Apache.png?raw=true)${template}`, err => {
        if (err) throw err
      })
    }
    else if (license == "GNU GPLv2") {
      fs.writeFile(`./README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/GPLv2.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else if (license == "GNU GPLv3") {
      fs.writeFile(`./README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/GPLv3.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else if (license == "MIT") {
      fs.writeFile(`./README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/MIT.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else if (license == "ISC") {
      fs.writeFile(`./README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/Apache.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else {
      return ``
    }
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  fs.link()
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
fs.writeFile(`./README.md`, data, function (err) {
  if (err) throw err;
  console.log('Saved!');
})


module.exports = {generateMarkdown,renderLicenseBadge,renderLicenseLink,renderLicenseSection};
