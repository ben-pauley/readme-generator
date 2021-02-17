function renderLicenseBadge(license) {
  switch (license) {
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      // If there is no license, return an empty string
      return "";
  }
}

function renderLicenseLink(license) {
  switch(license) {
    case "BSD":
      return "This project was created under the standard BSD licence. [Learn more here.](https://opensource.org/licenses/BSD-3-Clause)";
    case "MIT":
      return "This project was created under the standard MIT licence. [Learn more here.](https://opensource.org/licenses/MIT)";
    case "GPL":
      return "This project was created under the standard GPL licence. [Learn more here.](https://opensource.org/licenses/GPL-3.0)";
    default: 
      // If there is no license, return an empty string
      return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
