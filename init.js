var replace = require("replace");
var inquirer = require('inquirer');

inquirer.prompt([
      {
        type: "string",
        name: "projectName",
        message: "What's the project's name?",
      }
    ]).then(answer => {
      replace({
        regex: "component--library",
        replacement: answer.projectName,
        paths: ['.'],
        recursive: true,
        silent: true,
      });
      console.log("initialization done");
    })
    .catch(error => {
      console.log("Ooops...something went wrong?!")
    });