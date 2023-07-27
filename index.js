// importing required packages
const inquirer = require('inquirer');
// prevents user from inputting a number above 3
const maxInput = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', maxInput)
const fs = require("fs");
const { Triangle, Square, Circle } = require("./shapes");

//allows user to add input to the command line
function writeToFile(fileName, input) {
  // svg linked to logo
  let logo = '<svg version="1.1" viewBox="0 0 100 100" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  logo += `${input.shape}`;
  
  // if else statements created for different shapes, once the user chooses a shape, the polygon points and color fill are added
  if (input.shape === "Triangle") {
    shapeChoice = new Triangle();
    logo += `<polygon points="50,0 100,100 0,100" fill="${input.shapeColor}"/>`;
  } else if (input.shape === "Square") {
    shapeChoice = new Square();
    logo += `<rect x="20" width="90" height="90" fill="${input.shapeColor}"/>`;
  } else {
    shapeChoice = new Circle();
    logo += `<circle cx="40" cy="50" r="55" fill="${input.shapeColor}"/>`;
  }

// svg added to the end of logo to prevent irregular shape sizing
  logo += `<text x="35" y="80" font-size="40" fill="${input.textColor}">${input.text}</text></svg>`;
// if logo is succesfully created
  fs.writeFile(fileName, logo,() => {
   console.log("Generated logo.svg");
  });
}


// displays the questions to the user
function promptUser() {
inquirer
  .prompt([
    {
      type: 'maxlength-input',
      name: 'text',
      message: 'Enter three characters.',
      maxLength: 3,
    },
    {
      name: 'textColor',
      type: "input",
      message: 'Enter a color keyword for the text color.',
      
    },
    // list allows user to chose from more than one answer choice
    {
      name: 'shape',
      type: "list",
      message: 'Choose a shape for the logo.',
      choices: [ "Square", "Circle","Triangle"],
    },
    {
      name: 'shapeColor',
      type: "input",
      message: 'Enter a color keyword for the shape color.',
    },
    // input added to the svg file, when user opens 'logo.svg' in a live server, they will see a new logo
  ])
  .then((input) => {
    {writeToFile("logo.svg", input);
    }
  });
}

promptUser();

 
