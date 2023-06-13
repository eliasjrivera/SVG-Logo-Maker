// packages/imports needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

// svg file creation function for name, canvas, color, and text
function writeToFile(answers) {
    const DEFAULT_FILE_NAME = 'logo.svg';

    let svgCanvas ='<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>';
    svgCanvas += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === 'Triangle') {
        shapeChoice = new Triangle();
    } else if (answers.shape === 'Square') {
        shapeChoice = new Square();
    } else {
        shapeChoice = new Circle();
    };

    shapeChoice.setColor(answers.shapeColor);
    svgCanvas += shapeChoice.render();

    svgCanvas += `<text x='150' y='130' text-anchor='middle' font-size='40' fill='${answers.textColor}'>${answers.text}</text>`;
    svgCanvas += "</g></svg>";

    fs.writeFile(DEFAULT_FILE_NAME, svgCanvas, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
};

// inquirer prompt module
function inquirerPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message:
                'What text would you like your logo to have? Up to three characters.',
                name: 'text',
                // adding validation function to test character legnth, helped by tutor
                validate: function (input) {
                    // creating async hack for inquirer
                    const done = this.async();
                    // timeout to test character length
                    setTimeout(function() {
                        if (input.length > 3) {
                            done('Answer needs to be three characters or less')
                        }
                        // shows as null or true
                        done(null, true);
                    }, 1000);
                }
            },
            {
                type: 'input',
                message:
                'What text color would you like your logo to have? Use color name or a hexadecimal number.',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'What shape would you like your logo to have?',
                name: "shape",
                choices: [
                    'Triangle', 
                    'Square', 
                    'Circle'
                ]
            },
            {
                type: 'input',
                message:
                'What color would you like your shape to have? Use color name or a hexadecimal number.',
                name: 'shapeColor',
            },
])
    .then(answers => {
            writeToFile(answers);
        }
    )};


// calling inquirer prompt
inquirerPrompt();