# Component library template
## Setup
This template can be used to create a component library repository using stencilJS.

When you created your own repository with this template please follow the following instructions and change this readme according to your project setup afterwards.

#### 1. After installing the packages, use `npm run init` to initialize your project. You can customize the preview here: .storybook/manager.js
#### 2. Create new components with `npm run generate` - Don't forget to use a dash in the component's name! There is already an example component in the components folder where we used Storybook Knobs and Faker, to give you an idea :)
#### 3. Start the build and serve process with `npm start`.

## Features
### Tests
If you want to show the results of the generated component tests in the storybook preview just run `npm run test:generate-output` and uncomment all comments below line 3 in the *.stories.ts files before running `npm start`.

### Screenshot Testing

