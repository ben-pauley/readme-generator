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
      return "This project was created under the standard BSD licence. Learn more [here](https://opensource.org/licenses/BSD-3-Clause).";
    case "MIT":
      return "This project was created under the standard MIT licence. Learn more [here](https://opensource.org/licenses/MIT).";
    case "GPL":
      return "This project was created under the standard GPL licence. Learn more [here](https://opensource.org/licenses/GPL-3.0).";
    default:
      // If there is no license, return an empty string
      return "";
  }
}

function renderLicenseSection(license) {
  if (license !== "Other") {
    return renderLicenseBadge(license) + renderLicenseLink(license);
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

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
  You can find my GitHub profile, ${data.username}, [here](github.com/${
    data.username
  }).

  If you have any additional questions, email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
