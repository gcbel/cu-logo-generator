/* DEPENDENCIES */
const inquirer = require('inquirer');
const colors = require('colors');
const {writeFile} = require('fs');
import Shape from './shapes.js';

/* VARIABLES */
const questions = [
    {
        "type": "input",
        "message": "What letters would you like on your logo? Input up to 3 letters.".magenta,
        "name": "text"
    },
    {
        "type": "input",
        "message": "What color would you like the logo text to be?".magenta,
        "name": "text-color"
    },
    {
        "type": "list",
        "message": "What shape would you want the background to be?".magenta,
        "name": "shape",
        "choices": ["Circle", "Square", "Triangle"]
    },
    {
        "type": "input",
        "message": "What color would you want the background shape to be?".magenta,
        "name": "shape-color"
    }
]

/* FUNCTIONS */
/**
 * Generates text content for README file.
 * @param {string} fileName Name of file to input text
 * @param {object} data Information from user prompts
 */
function createLogo (filename, responses) {
    console.log(responses)

    const shape = new Circle;

    writeFile(filename, shape.background);
}

/* INITIALIZERS */
/* Initialize call for user input and readme creation */
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => createLogo("logo.svg", responses));
}

/* Function call to initialize app */
init();