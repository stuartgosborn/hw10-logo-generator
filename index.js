// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateSvg = require("./utils/generateSvg");

// Sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions (GitHub username, email, instructions for contact)
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "text",
    message: "Please enter up to three (3) letters for your logo.",
    type: "input",
    validate: function (value) {
      // Check if the input length is less than or equal to 3 characters
      return value.length <= 3
        ? true
        : "Text must be three (3) characters or less";
    },
  },
  {
    name: "color",
    message:
      "Please enter a color name (options red, orange, yellow, green, blue, indigo, violet) or a hexadecimal number for your color.",
    type: "input",
    validate: function (value) {
      // Check if the input is a valid color name or a hexadecimal number
      if (/^#[0-9A-F]{6}$/i.test(value)) {
        // Input is a valid hexadecimal color
        return true;
      } else if (
        /^(red|orange|yellow|green|blue|indigo|violet)$/i.test(value)
      ) {
        // Input is a valid color name
        return true;
      } else {
        // Input is invalid
        return 'Please enter a valid color name (e.g., "red") or a hexadecimal number.';
      }
    },
  },
  {
    name: "shape",
    message: "Please choose a shape?",
    type: "list",
    choices: ["circle", "triangle", "square"],
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const successMsg = `Success! Generated ${fileName}`;
  fs.writeFile(fileName, generateSvg(data), (err) =>
    err ? console.log(err) : console.log(successMsg)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("logo.svg", response));
}

// Function call to initialize app
init();
