const inquirer = require('inquirer');


 const fs = require('fs');

 const generateMarkdown = require('./utils/generateMarkdown.js');



const promptUser =() => {

    return inquirer.prompt([
        {
            type: 'input',

            name:'Title',

            message: 'What is the Title of your project? (Required)',

            validate: nameInput => {

                if (nameInput){

                    return true;
                }else{

                    console.log ('Please enter Project Title!');
                    return false;
                }
            }
        },
        {

            type: 'input',

            name: 'description',

            message: 'Please provide a description of your application (Required)',

            validate: descriptionInput => {

                if (descriptionInput){

                    return true;
                }else{

                    console.log ('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',

            name: 'confirmAbout',

            message: 'Would you like to include a table of contents?',

            default: true
        },
        { 
            type: 'checkbox',

            name: 'contents',

            message: 'What sections would you like to include?',

            choices: ['Title', 'Description','Usage','Installation', 'License', 'Contritbutions', 'Tests', 'Questions', 'Miscellaneous']
        },
        {

            type: 'input',

            name: 'installation',

            message: 'Please provide installation instructions. (Required)',

            validate: installationInput => {

                if (installationInput){
                    return true;
                }else{
                    console.log ('Please provide installation instructions!');
                    return false;
                }
            }
            
        },
        {
            type: 'input',

            name: 'usage',

            message:'Please provide details about application usage (Required)',

            validate: usageInput => {

                if (usageInput){
                    return true;
                }else{
                    console.log ('Please provide usage details!');
                    return false;
                }
            }
        },
        {

            type: 'input',

            name: 'license',

            message: 'please enter license information',

            validate: licenseInput => {

                if (licenseInput){
                    return true;
                }else{
                    console.log ('Please enter license information');
                    return false;
                }
            }
        }, 
        {

            type: 'input',

            name: 'contributions',

            message: 'please list all contributors',


        },
        {

            type: 'input',

            name: 'tests',

            message: 'please list all tests'

        },
        {

            type: 'input',

            name: 'username',

            message: 'Please provide GitHub username (Required)',

            validate: userNameInput => {
                if (userNameInput){
                    return true;

                }else{
                    console.log('Please enter GitHub Username');
                    return false;
                }
            }


        },
        {

            type: 'input',

            name: 'link', 

            message: 'Enter GitHub link to your project',

            validate: linkInput => {

                if (linkInput){
    
                    return true;
                }else{
                    console.log ('Please enter your GitHub link!');
                    return false;
    
                }
    
            }
        }


    ])}

    promptUser().then(answers => console.log(answers))

    .then (answers => {
        const pageHTML=generateMarkdown(answers);
 
 
 
        fs.writeFile('./index.html', pageHTML, err => {
 
         if (err) throw new Error (err);
 
            console.log('Portfolio complete! Check out index.html to see the output');
      });
     });

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
  };
  
  printProfileData(profileDataArgs);
