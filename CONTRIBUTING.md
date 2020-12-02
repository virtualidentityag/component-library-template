# Contributing Guide

## Branch naming
When creating a new branch, please follow the naming convention: `[type]/[ticket]-[description]`.

Example: `feature/XYZ-1-header`, `refactor/XYZ-123-headline` or `bugfix/XYZ-42-breadcrumbs`.

## Pull Requests
Pull requests should be named according to the branch name: `[type]: [ticket] [description]`.

Example: `Feature: XYZ-1 header`, `Refactor: XYZ-123 headline` or `Bugfix: XYZ-42 breadcrumbs`.

In order to be merged, a pull request needs:
- build passing
- linting passing
- tests passing (which includes \>= 80% test coverage)
- one review and approval
- if project contains staging branch: Merge of your branch into staging BEFORE merge to develop.

After a PR is merged to develop, don't forget to delete the original branch.

> Important: When merging a PR to the `master` branch, please use a squash-merge strategy. However, in order to better diff potential conflicts, any other branches should use merge-commit strategy.

### Reviewing
The reviewer should not only ensure code quality but test quality. To do so, they should ensure the following in a PR:
- code is as clean as possible
- naming conventions are followed
- tests properly test a component's intended functionalities

What should not be commented:
- Personal preference (i would write it that way), without clear arguments why the suggested way is better for the project and worth the time to rewrite it
- code styles (should all be covered by linting, not reviewed and fixed manually)


## Git Workflow

The figure below shows what the branching model looks like. Arrows to the right (+->) indicate where to branch off from. Arrows to the left (<-+) show where to merge back into. The small dots (•) represent tags/releases.

```ruby
  +              +              +             +            +            +
  |              |              |             |            |            |
  |              |              |             |            |            |
  |              |              |             |            |            |
  |              |              |             |            |            |
  |              |              |             |            |            |
  •<----1.1.2----+---------------------------->            |            |
  |  hotfix for  |              |             |            |            |
  |legacy version|              |             |            |            |
  |              |              •<-1.2.0------+            |            |
  |              <--------------+             |            |            |
  |              |              |             |            |            |
  |              |              |             <-------------------------+
  |              |              |             |            |            |
  |              |              |             |            |            |
  |              |              |             |            |            |
  |              +-------1.1.1->• ------------>            |            |
  |              |              |             |            |            |
  |              <--------------+             |            <------------+
  |              |              |             |            |            |
  |              |              |             |            |            |
  |              |              •<-1.1.0------+            |            |
  |              |              |             |            |            |
  |              |              |             |            |            |
  |              |              |             +------------------------->
  |              |              |             |            |            |
  |              |              |             |            |            |
  +              +              +             +            +            +
release/*     hotfix/*       master        develop      staging     feature/*     
                                                                    bugfix/*
                                                                    refactor/*
```
## Branches

### master

Master is your main branch. Tags and Releases are created in that branch. It can go live anytime and tags here are used for rollbacks if necessary.

### develop

It contains all finished and approved feature branches. It can also be used to share finished stories that another story builds upon but that is not yet released.

The `develop` branch contains the most up-to-date code. Any feature/bugfix branches should be created from this branch.
To merge your feature/bugfix branch to the `develop` branch, you need to create a Pull Request and have it reviewed.

If your project contains an `staging` branch, your feature/bugfix branch has to be merged in there and tested before merging it to develop.

### hotfix/*

These branches are used to merge urgent fixes that cannot wait for the next planned release.

* branch from master
* merge to `master` and `develop`
* if it is a hotfix for a legacy release (master is always releases ahaead), merge to release/* (replace * with release version number) instead of master.

### staging

The `staging` branch is used to install a set of features onto a testing environment or staging server. Simply merge any branch you want to test or cherry pick commits into this branch. This branch can be used for automated staging tests. With every push on it, an automated build can deploy this branch to your testing server.

* This branch is one-way. Only merge into, never branch from or merge staging into another branch

### Feature Branches / Bugfix Branches

These branches represent a new feature (a user story in agile projects). Create one of these branches for each story/feature or bugfix you want to develop to separate unfinished work from the code base.

* branch from development
* merge to development
* gets deleted after the feature/bugfix has been merged to master and released

### "Release"

* merge `develop` into `master` (or into release/* branch for hotfixes of legacy versions)


## Components
To create a new component, run `npm run generate` and add your component tag to it and when prompted for which features to include, select e2e and/or spec tests and continue.

Example: `npm run generate my-headline`.

In the `.stories.ts` file, you should create a `Default` and additional stories, with senseful configurations and knobs, to enable designers and developers to test your component in different scenarios.

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
Every branch will be automatically deployed on push to: `http://frontend.live/[repositoryName]/[branch]/`

Example: `http://frontend.live/feature/XYZ-1-header/`

## IDEs
To take advantage of the linter's strengths and to ensure no problems during merges, please consider installing the following plugins on your IDE.

If your IDE is not present on this list, please help us by making a PR to include proper plugins for it and ensure everyone shares this knowledge.

Hint: "on-save" linting can be a big help to save development time.

### VSCode
- dbaeumer.vscode-eslint
- hex-ci.stylelint-plus