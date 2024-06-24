/* DEPENDENCIES */
const inquirer = require('inquirer');

/* VARIABLES */
const questions = [
    {
        "type": "input",
        "message": "What letters would you like on your logo? Input up to 3 letters.",
        "name": "text"
    },
    {
        "type": "input",
        "message": "What color would you like the logo text to be?",
        "name": "text-color"
    },
    {
        "type": "list",
        "message": "What shape would you want the background to be?",
        "name": "shape",
        "choices": [circle, square, triangle]
    },
    {
        "type": "list",
        "message": "What color would you want the background shape to be?",
        "name": "shape-color"
    }
]

/* FUNCTIONS */
/**
 * Generates text content for README file.
 * @param {string} fileName Name of file to input text
 * @param {object} data Information from user prompts
 */
function createLogo (responses) {
    console.log(responses)
}

/* INITIALIZERS */
/* Initialize call for user input and readme creation */
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => createLogo(responses));
}

/* Function call to initialize app */
init();