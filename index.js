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
    const numChars = responses.text.length;
    if (numChars > 3 || numChars === 0) {
        console.error("Please select input text between 1 and 3 characters!".red)
    }

    // Calculations for text position and size
    let fontSize = 170 - (numChars * 30);
    let yIndex = 76 - (numChars * 4);

    // Generate shape XML,if triangle change text position and size
    let shape = ""
    if (responses.shape === "Square") {shape = new Square(responses.shape_color)}
    else if (responses.shape === "Circle") {shape = new Circle(responses.shape_color)}
    else if (responses.shape === "Triangle") {
        shape = new Triangle(responses.shape_color)
        fontSize = 145 - (numChars * 30);
        yIndex = 92 - (numChars * 2)
    } else {console.error("Please select a shape from the list!".red)};

    logo = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.draw()}
    <text x="50%" y="${yIndex}%" text-anchor="middle" fill="${responses.text_color}" font-size="${fontSize}px">${responses.text}</text>
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