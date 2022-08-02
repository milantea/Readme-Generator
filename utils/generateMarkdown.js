// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let yourLicense = "";
  if (license === "Apache") {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    yourLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Boost") {
    yourLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else {
    yourLicense = "";
  }
  return yourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let yourLicense = "";
  if (license === "Apache") {
    yourLicense = `[Apache](https://choosealicense.com/licenses/apache-2.0/#)`;
  } else if (license === "MIT") {
    yourLicense = `[MIT](https://choosealicense.com/licenses/mit/)`;
  } else if (license == "Boost") {
    yourLicense = `[Boost](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else {
    yourLicense = `${renderLicenseLink(license)}`;
  }
  return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `License provided here please see ${renderLicenseLink(license)}.`;
  }
}

function githubLink(github) {
  let gitLink = "[' + github + ']" + "(https://github.com/" + github + ")";
  return gitLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Project Description](#project-description)
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Project Description 
  ${data.description}

  ## Project Installation 
  ${data.installation}

  ## Usage Information 
  ${data.usage}

  ## License 
  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines 
  ${data.contribution}

  ## Test Instructions 
  ${data.instructions}

  ## Questions
  ${data.questions}
  GitHub profile ${githubLink(data.github)}
  Please message me if you have any questions ${data.email}
`;
}

module.exports = generateMarkdown;
