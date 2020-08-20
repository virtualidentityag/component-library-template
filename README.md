# Component library template
## Setup
This template can be used to create a component library repository using stencilJS.

When you created your own repository with this template please follow the following instructions and change this readme according to your project setup afterwards.

#### 1. After installing the packages, use `npm run init` to initialize your project. You can customize the preview here: .storybook/manager.js
#### 2. Create new components with `npm run generate` - Don't forget to use a dash in the component's name! There is already an example component in the components folder where we used Storybook Knobs and Faker, to give you an idea :)
#### 3. Start the build and serve process with `npm start`.

## Features
### Tests
Run `test:generate-output` before running `npm start` to see the test results for the generated component tests in the preview.
### Screenshot Testing

### Configure your GitHub repository by code
We provide some GitHub repository configuration standards, like recommended branch protection settings, with this template. You can find the configuration in `.github/settings.yml`. If you want those settings to be applied to your GitHub repository, install the GitHub Settings app on your repository (more info [here](https://github.com/apps/settings)). The app will read the `settings.yml` automatically and apply them to your repository. Afterwards, you can add or customize `settings.yml` according to your preferences.
