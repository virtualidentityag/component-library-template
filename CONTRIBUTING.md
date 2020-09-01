# Contributing Guide

## Branches
The `master` branch contains the most up-to-date code. Any development branches should be created from this branch.

To merge your development branch to the `master` branch, you need to create a Pull Request and have it reviewed.

### Naming
When creating a new branch, please follow the naming convention: `[type]/[ticket]-[description]`.

Example: `feature/XYZ-1-header`, `refactor/XYZ-123-headline` or `bugfix/XYZ-42-breadcrumbs`.

### Pull Requests
Pull requests should be named according to the branch name: `[type]: [ticket] [description]`.

Example: `Feature: XYZ-1 header`, `Refactor: XYZ-123 headline` or `Bugfix: XYZ-42 breadcrumbs`.

In order to be merged, a pull request needs:
- build passing
- linting passing
- tests passing (which includes \>= 80% test coverage)
- one review and approval

After a PR is merged, don't forget to delete the original branch.

> Important: When merging a PR to the `master` branch, please use a squash-merge strategy. However, in order to better diff potential conflicts, any other branches should use merge-commit strategy.

### Reviewing
The reviewer should not only ensure code quality but test quality. To do so, they should ensure the following in a PR:
- code is as clean as possible
- naming conventions are followed
- tests properly test a component's intended functionalities

## Components
To create a new component, run `npm run generate` and add your component tag to it and when prompted for which features to include, select either e2e or spec tests and continue.

Example: `npm run generate my-headline`.

Afterwards, change the extension of the new style file to `scss`. Also remember to change its reference in the `tsx` file otherwise no style will be applied to the component.

Example: `src/components/my-headline/my-headline.css` to `src/components/my-headline/my-headline.scss`.

```typescript
// src/components/my-headline/my-headline.tsx
@Component({
  styleUrl: 'my-headline.css',
})
// to
@Component({
  styleUrl: 'my-headline.scss',
})
```

Finally, remove the `index.html` file included in your new component folder and create a new `.stories.ts` file to write your component previews.
In this file, you should create a `Default` story, with every possible knob, to enable designers and developers to test your component in different scenarios.
You should also add any expected behavior or edge-cases of your component to other stories.

Example:
```javascript
// Context: "H" tags go from 1 to 6 (h1 -> h6)

// this is the default scenario
export const Default = ({ /* knobs go here */ }) => `
  <poc-headline
    headline="${content}"
    level="${level}"
  ></poc-headline>
`;

// here we show that a level="7" is converted to a h6
export const IncorrectLevels = ({ /* knobs go here */ }) => `
  <poc-headline
    headline="${content}"
    level="7"
  ></poc-headline>
`;
```

### Tests
Most tests can be performed visually using Storybook. Use the `.stories.ts` file to show off your component's features and edge-cases so that designers and developers can manually QA your components.

It is important that the stories show what the component should do, i.e. its' features. This will help ensure the requirements for a component are not only written down on tickets but also visually documented in the component itself.

For non-visual tests, you can use a `spec.tsx` file on the `test` folder of your component. Use the `Jest` functions and classes when creating tests for a component. Any helper functions that you need to test several components should be placed in the `testing` folder of the project and imported from there.

It is not mandatory for a component to have a single test file as some more complex components may require more than one in order to keep the code maintainable and readable.

> Important: At least one automated test is required to make sure the component is able to render properly.

### Documentation
Each component should have a documentation of its features in a Readme in its folder.

This file partially auto-generated/updated when running `npm start` or `npm run build`.

## Commit Guidelines
Please follow the conventional commit guidelines: https://www.conventionalcommits.org/en/v1.0.0/  
We recommend the usage of the git-cz https://www.npmjs.com/package/git-cz

Before every commit, a linter and style fix will run over your commits, so everything keeps our code guidelines.

## Auto Deployment
Every branch will be automatically deployed on push to: `http://preview.<your server>-components-library-website.s3-website.eu-central-1.amazonaws.com/[branch]/`

Example: `http://preview.<your server>-components-library-website.s3-website.eu-central-1.amazonaws.com/feature/XYZ-1-header/`

## IDEs
To take advantage of the linter's strengths and to ensure no problems during merges, please consider installing the following plugins on your IDE.

If your IDE is not present on this list, please help us by making a PR to include proper plugins for it and ensure everyone shares this knowledge.

Hint: "on-save" linting can be a big help to save development time.

### VSCode
- dbaeumer.vscode-eslint
- hex-ci.stylelint-plus
