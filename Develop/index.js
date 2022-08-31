const inquirer = require('inquirer');


 const fs = require('fs');
 const util =require('util');
 //const generateMarkdown = require('./utils/generateMarkdown.js');
 const writeFileAsync = util.promisify(fs.writeFile);



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

    function generateMarkdown(answers) {
        return `![GitHub last commit](https://img.shields.io/github/last-commit/${answers.github}/${answers.projectName})  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/${answers.github}/${answers.projectName})  ![GitHub watchers](https://img.shields.io/github/watchers/${answers.github}/${answers.projectName}?label=Watch&style=social)  ![GitHub top language](https://img.shields.io/github/languages/top/${answers.github}/${answers.projectName})  ![GitHub license](https://img.shields.io/badge/license-${answers.license}-blueviolet) <br> 
    # ${answers.Title}
        
    ## Table of Contents 
    1. [About the Project](#About-The-Project)
    1. [Project Links](#Project-Links)
    1. [Demo](#Demo)
    1. [Getting Started](#Getting-Started)
    1. [Installation](#Installation)
    1. [Usage](#Usage)
    1. [Tests](#Tests)
    1. [Contribution Guidelines](#Contribution-Guidelines)
    1. [Project Team](#Project-Team)
    1. [Questions](#Questions)
    1. [License](#License)
        
    ## About The Project
    ${answers.description}
        
    // ## Project Links
    // [Repo Link](https://github.com/${answers.username}/${answers.Title}) <br>
    // [GitHub Project Link](https://${answers.link}.github.io/${answers.Title}/)
        

        
    ## Getting Started
        
    #### Languages and libraries used in this project (separate with commas):
    ${answers.languages}
        
    #### Installation: 
    \`\`\`  
    ${answers.installation}
    \`\`\`
    #### Usage:
    \`\`\`  
    ${answers.usage}
    \`\`\`
    #### Tests:
    \`\`\`  
    ${answers.tests}
    \`\`\`
    #### Contributions:
    \`\`\`  
    ${answers.contributions}
    \`\`\`
        
    ## Project Team
    [${answers.username}](${answers.link}) <br>
    ## Questions
        
    ## License
    #### Distributed under the ${answers.license} License. See [Choose A License](https://choosealicense.com/) for more information.;)
   
    `;
}
    


    //promptUser().then(answers => console.log(answers))

    //.then (answers => {
        //const pageHTML=generateMarkdown(answers);
 
 
 
    //     fs.writeFile('./index.html', pageHTML, err => {
 
    //      if (err) throw new Error (err);
 
    //         console.log('Portfolio complete! Check out index.html to see the output');
    //   });
    //  });

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}
const init = async () => {
    console.log('Hi! Create your README!');
    try {
        const answers = await promptUser();

        const finalFile = generateMarkdown(answers);
        if (answers.license === "Other") {
            console.log("You entered 'Other' for your project license, you may add a license once your file is generated.");
        }
        // function to write README file
        await writeFileAsync('myREADME.md', finalFile);

        console.log('Yay! Your README successfully wrote to myREADME.md');
    } catch (err) {
        console.log('Ooops, an error has occurred');
    }
};
// function call to initialize program
init();


const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
  };
  
  printProfileData(profileDataArgs)
