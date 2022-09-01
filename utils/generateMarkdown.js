
const fs = require('fs');
const replace = require('replace-in-file');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(template, license) {
    if (license == "Apache Licence 2.0") {
      fs.writeFile(`./output/README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/Apache.png?raw=true)${template}`, err => {
        if (err) throw err
      })
    }
    else if (license == "GNU GPLv2") {
      fs.writeFile(`./output/README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/GPLv2.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else if (license == "GNU GPLv3") {
      fs.writeFile(`./output/README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/GPLv3.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else if (license == "MIT") {
      fs.writeFile(`./output/README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/M-I-T-badge.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else if (license == "ISC") {
      fs.writeFile(`./output/README.md`, `![License](https://github.com/cvanbreda91/delta-duckie/blob/main/utils/badges/I-S-C-badge.png?raw=true)${template}`, err => {
        if (err) throw err;
      })
    }
    else {
      return ``
    }
  }

// Create a function that returns the license section
// If there is no license, return an empty string

// Create a function that returns the license section AND license link of README
// If there is no license, return an empty string

function renderLicenseSection (license, username){
  if (license == "Apache License 2.0") { 
    var options = {
      files: './output/README.md',
      from: /Apache License 2.0/g,
      to: `Copyright 2022 ${username}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
      
          http://www.apache.org/licenses/LICENSE-2.0
      
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      
      Please see following link for more information: [Apache License](https://www.apache.org/licenses/LICENSE-2.0.txt)`,
    };
  replace(options)
  .catch(error => {
    console.error('Error occurred:', error);
  });}
  else if (license == "GNU GPLv2") { 
    var options = {
      files: './output/README.md',
      from: /GNU GPLv2/g,
      to: `Copyright (C) 2022 ${username}

      This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
      
      This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
      
      You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
      
      Please see following link for more information: [GNU GPLv2](https://opensource.org/licenses/gpl-2.0.php)`,
    };
  replace(options)
  .catch(error => {
    console.error('Error occurred:', error);
  });}
  else if (license == "GNU GPLv3") { 
    var options = {
      files: './output/README.md',
      from: /GNU GPLv3/g,
      to: ` Copyright (C) 2022  ${username}

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.
      
      Please see following link for more information: [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)`,
    };
  replace(options)
  .catch(error => {
    console.error('Error occurred:', error);
  });}
  else if (license == "MIT") { 
    var options = {
      files: './output/README.md',
      from: /MIT/g,
      to: `Copyright © 2022 ${username}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
      Please see following link for more information: [MIT](https://mit-license.org/)`,
    };
  replace(options)
  .catch(error => {
    console.error('Error occurred:', error);
  });}
  else if (license == "ISC") { 
    var options = {
      files: './output/README.md',
      from: /ISC/g,
      to: `Copyright (c) 2022 ${username}

      Permission to use, copy, modify, and distribute this software for any
      purpose with or without fee is hereby granted, provided that the above
      copyright notice and this permission notice appear in all copies.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
      WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
      MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
      ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
      WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
      ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
      OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`+`
      
Please see following link for more information: [ISC](https://opensource.org/licenses/ISC)`,
    };
  replace(options)
  .catch(error => {
    console.error('Error occurred:', error);
  });}
  else {
    return ``
  }

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
fs.writeFile(`./output/README.md`, data, function (err) {
  if (err) throw err;
  console.log('Saved!');
})


module.exports = {generateMarkdown,renderLicenseBadge,renderLicenseSection};
