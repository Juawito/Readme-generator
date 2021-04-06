const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your GitHub url?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the current year for your license?',
            name: 'year'
        },
        {
            type: 'input',
            message: 'Please give a description for your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How is someone able to use your application',
            name: 'usage'
        },
        {
            type: 'checkbox',
            message: 'Please select a license for your project.',
            choices: ['MIT', 'Apache', 'BSD-3', 'GNU-3', 'none'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'Please list any contributors including yourself.',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'How does someone install your application?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Do you have tests for your application, If so what is the command?',
            name: 'test'
        }
    ])
}

function init() { 
    promptQuestions()
    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('Succesfully wrote README.md file'))
    .catch((err) => console.error(err));
}
init();
