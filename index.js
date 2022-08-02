// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What do you want the title to be?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you want to run your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project used for?",
  },
  {
    type: "list",
    name: "license",
    message: "Do you want to add a license?",
    choices: ["Apache", "MIT", "Boost"],
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the guidelines for contributing to this project?",
  },
  {
    type: "input",
    name: "instructions",
    message: "How are tests run?",
  },
  {
    type: "input",
    name: "questions",
    message: "Please provide instructions for questions.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("successfully written file to folder.");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      return markdown(answers);
    })
    .then((generatedMarkdown) => {
      let fileLocation =
        "/Users/milanteadams/MSU_Projects/Module_9_Challenge/README.md";
      writeToFile(fileLocation, generatedMarkdown);
    });
}

// Function call to initialize app
init();
