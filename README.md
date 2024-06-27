# Logo Generator

## Description

In this project, I created logo generator. The program prompts a user to input desired styles for their logo, and outputs a .svg file that contains a logo according to the user's input. In this project, I had the opportunity to practice using object-oriented programming and Node.js.

Here are three examples of completed logos:

| ![Logo 1](/assets/images/logo1.png) | ![Logo 2](/assets/images/logo2.png) | ![Logo 3](/assets/images/logo3.png) |
|------------------------------------------|-------------------------------------------|------------------------------------------|

[Here](https://drive.google.com/file/d/1i6D2hErEhiZ4kKh70GxU--XGlA6RvhEQ/view?usp=sharing) is a video elborating on the installation and usage instructions.

## Installation

The logo generator can be run locally by cloning this repository. 

Once the repository has been cloned, the program will require Node.js. To check if you have previously installed Node.js, you can run `node --version`. If Node.js is installed, a version number will appear. If no version number appears, you can download the package [here](https://nodejs.org/en/download/package-manager).

To download the package dependencies ([inquirer](https://www.npmjs.com/package/inquirer) and [colors](https://www.npmjs.com/package/colors)), run `npm install` or `npm i`.

## Usage

To generate a logo .svg file, this project can be run with the command `node index` or `node index.js`. The terminal will prompt the user for 4 questions that will makeup the styles of the logo, and the .svg file will automatically appear in the same folder as the index.js, and will be titled logo.svg.

## Credits

Reference for .svg shapes: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes <br>
Reference for .svg text: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

## License

[MIT License](https://opensource.org/license/mit)
