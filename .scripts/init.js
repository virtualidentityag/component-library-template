const replace = require("replace");
const inquirer = require("inquirer");
const fs = require('fs-extra');

inquirer
  .prompt([
    {
      type: "string",
      name: "projectName",
      message: "What's the project's name?",
    },
  ])
  .then((answers) => {
    // eslint-disable-next-line no-console
    console.log("Initializing...");
    replace({
      regex: "component--library",
      replacement: answers.projectName,
      paths: ["./package-lock.json", "./package.json", "./stencil.config.ts"],
      recursive: false,
      silent: true,
    });
    replace({
      regex: "component--library",
      replacement: answers.projectName,
      paths: ["./.storybook", "./loader", "./src", "./testing"],
      recursive: true,
      silent: true,
    });
  })
  .then(() => {
    fs.unlink("./.scripts/init.js");
    // eslint-disable-next-line no-console
    console.log("Initilization done");
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log("Ooops...something went wrong?! " + err);
  });
