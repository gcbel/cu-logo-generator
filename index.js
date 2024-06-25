/* DEPENDENCIES */
const inquirer = require('inquirer');
const colors = require('colors');
const {writeFile} = require('fs');
const {Shape, Square, Circle, Triangle} = require('./lib/shapes.js');

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
        "name": "text_color"
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
        "name": "shape_color"
    }
]

/* FUNCTIONS */
/**
 * Generates text content for README file.
 * @param {string} fileName Name of file to input text
 * @param {object} data Information from user prompts
 */
function createLogo (filename, responses) {
    if (responses.text.length > 3 || responses.text.length === 0) {
        console.error("Please select input text between 1 and 3 characters!".red)
    }

    let shape = ""
    if (responses.shape === "Square") {shape = new Square(responses.shape_color)}
    else if (responses.shape === "Circle") {shape = new Circle(responses.shape_color)}
    else if (responses.shape === "Triangle") {shape = new Triangle(responses.shape_color)}
    else {console.error("Please select a shape from the list!".red)};

    logo = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="100" y="100" fill="${responses.text_color}">${responses.text}</text>
    ${shape.draw()}
</svg>
`

    writeFile(filename, logo, (err) => {
        err ? console.error(`Error: ${err}`) : console.log(`Success! Your logo is in logo.svg!`)
    });
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