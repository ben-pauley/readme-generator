const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions to be asked by inquirer in command line
const questions = [
  "What is the title of your project?",
  "What is your project about?",
  "How do users install your project?",
  "How do users use your project?",
  "How can users contribute to your project?",
  "How can users test your project?",
  "What license does your project require?",
  "What is your GitHub username?",
  "What is your email address?",
];

// write data collected from inquirer to markdown file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("File successfully generated!")
  );
}

// initialise application with inquirer
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "contributing",
      },
      {
        type: "input",
        message: questions[5],
        name: "tests",
      },
      {
        type: "list",
        message: questions[6],
        name: "license",
        choices: ["BSD", "MIT", "GPL"],
      },
      {
        type: "input",
        message: questions[7],
        name: "username",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
      },
    ])
    .then((answers) => {
      writeToFile("README.md", answers);
    });
}

init();
