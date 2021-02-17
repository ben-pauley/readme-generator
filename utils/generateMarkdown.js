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
  switch (license) {
    case "BSD":
      return "BSD licence. Learn more [here](https://opensource.org/licenses/BSD-3-Clause).";
    case "MIT":
      return "MIT licence. Learn more [here](https://opensource.org/licenses/MIT).";
    case "GPL":
      return "GPL licence. Learn more [here](https://opensource.org/licenses/GPL-3.0).";
    default:
      // If there is no license, return an empty string
      return "";
  }
}

function renderLicenseSection(license) {
  if (license !== "Other") {
    return `This project was created under the standard ${renderLicenseLink(
      license
    )}`;
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

// inconsistent javascript indentation so that there isn't unwanted indentation in markdown file
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
You can find my GitHub profile, ${data.username}, [here](http://github.com/${
    data.username
  }).

If you have any additional questions, email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
