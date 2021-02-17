const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  "What is your project about?",
  "What is your project about?",
  "How do users install your project?",
  "How do users use your project?",
  "How can users contribute to your project?",
  "How can users test your project?",
  "What license does your project require?",
  "What is your GitHub username?",
  "What is your email address?",
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown(data), (err) =>
    err ? console.error(err) : console.log("File successfully generated!")
  );
}

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
        name: "test",
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
