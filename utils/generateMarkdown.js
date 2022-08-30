
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
function renderLicenseLink(){}
  


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(username) {
  fs.readFile(`./README.md`, 'utf8', function (err,data) {

    var formatted = data.replace(/Apache Licence 2.0/g, `Copyright 2022 ${username}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`);
  
   fs.writeFile(`./README.md`, formatted, 'utf8', function (err) {
      if (err) return console.log(err);
   });
  });
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
fs.writeFile(`./README.md`, data, function (err) {
  if (err) throw err;
  console.log('Saved!');
})


module.exports = {generateMarkdown,renderLicenseBadge,renderLicenseLink,renderLicenseSection};
