const inquirer = require('inquirer');
const maxInput = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', maxInput)

inquirer
  .prompt([
    {
      type: 'maxlength-input',
      name: 'characters',
      message: 'Enter three characters.',
      maxLength: 3,
    },
    {
      name: 'textColor',
      message: 'Enter a color keyword for the text color.',
      default: '#ffffe0',
    },
    {
      name: 'shape',
      message: 'Choose a shape for the logo.',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter a color keyword for the shape color.',
      default: '#ffffe0',
    },
  ])
 
