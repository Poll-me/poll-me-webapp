# Files structure

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Project stuff](#project-stuff)
- [Application code](#application-code)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Project stuff
All the files that defines the type of project and also some code features
like CI support, tasks specification, etc...

```tree
|- .vscode                              // Visual Studio Code editor stuff
|  |- settings.json                     // Editor specific settings
|
|- config                               // All the project configuration files
|  |- head-config.common.js             // Head tags to include at index
|  |- helpers.js                        // Configuration JavaScript utility functions
|  |- karma.conf.js                     // Karma runner configuration required from root file
|  |- protractor.conf.js                // Protractor e2e runner configuration required from root file
|  |- spec.bundle.js                    // Unit tests requirements bundle
|  |- webpack.common.json               // Webpack common configuration along all environments
|  |- webpack.[env].json                // Webpack environment specific configuration
|
|- docs                                 // Root of project documentation
|  |- architecture.md
|  |- ...
|
|- src                                  // Project source code files
|  |- app                               // Application code (explained below)
|  |- public                            // Root folder for serve the application (will be copied to `dist/`)
|  |  |- assets                         // Public raw files
|  |  |  |- img                         // Web app images
|  |  |
|  |  |- meta                           // Public text info files
|  |  |  |- _redirects                  // Plain text file to indicate netlify wich redirects to do
|  |  |  |- browserconfig.xml           // Microsoft application info
|  |  |  |- humans.txt                  // Plain text file about webapp to read by humans
|  |  |  |- manifest.json               // App metadata file
|  |  |  |- robots.txt                  // Text information for internet robots
|  |
|  |- custom-typings.d.ts               // TypeScript types definitions needed for the app
|  |- index.html                        // HTML template for the app index
|  |- main.browser.ts                   // TypeScript bundle index for app code
|  |- polyfills.browser.ts              // TypeScript bundle index for polyfills
|
|- .editorconfig                        // Editors standar configuration
|- .eslintrc.json                       // Rules specification for the JavaScript linter
|- .gitignore                           // List of ignored files from git
|- .markdownlint.json                   // Rules config for markdown linter
|- .nvmrc                               // Node Version Manager config
|- .travis.yml                          // CI process specification
|- CHANGELOG.md                         // Project relevant changes along versions
|- CONTRIBUTING.md                      // All you need to know to contribute to this project
|- karma.conf.js                        // Karma runner configuration
|- LICENSE                              // License specification file
|- netlify.toml                         // Deploy settings with Netlify
|- package.json                         // Application meta information
|- protractor.conf.js                   // Protractor e2e test runner configuration
|- README.md                            // Quickly project guide and the root of documentation
|- superstatic.json                     // HTTP statics web server configuration
|- tsconfig.json                        // TypeScript language compiler configuration
|- tslint.json                          // Rules specification for the TypeScript linter
|- webpack.config.json                  // Root configuration file of the project builder (Webpack)
```

## Application code
The structure of all the angular2 web app source code files follow the
[Angular2 guidelines](https://angular.io/docs/ts/latest/guide/style-guide.html) but
we will explain the main details down below.

The root is at `src/app/`.

This is the basic structure:

```tree
|- core
|  |- core.module.ts
|  |- index.ts
|
|- user [or any feature module]         // Feature module folder
|  |- core                              // Stuff to include in the module just one time
|  |- shared                            // Stuff shared along all the module components and submodules
|  |- user.component.[ts/html/scss]     // Feature main component files
|  |- user.[spec/e2e].ts                // Feature tests
|  |- user.module.ts
|  |- user-routing.module.ts            // Routes for user feature module
|  |- index.ts
|
|- shared                               // Stuff to be included in all feature modules
|
|- app.component.[ts/html/scss]
|- app.[spec/e2e].ts
|- app.module.ts                        // App module definition
|- app-routing.module.ts                // App main routes specification
|- environment.ts
|- index.ts
```