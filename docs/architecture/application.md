# Application architecture

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Bootstrap](#bootstrap)
- [Modules](#modules)
- [Components](#components)
  - [Templates](#templates)
  - [Styles](#styles)
- [Services](#services)
- [Directives](#directives)
- [Pipes](#pipes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Bootstrap
The files that require the entire application parts. We have three chunks with an
index file named `[chunk name].browser.ts`:

- **main**: get the main app module and makes the bootstrap of the application.
- **polyfills**: group all the needed polyfills.
- **vendor**: an index for all vendor libraries such as jQuery.

## Modules
The organization of angular2 elements is made by the _modules_ which group functionality
and import the needed stuff. We have different kind of modules in the project:

- Main types
  - App module (`app.module`) --> this module is the app root of angular2, the top level module.
  - Feature modules (`[feature].module`) --> group all the angular2 elements related to a concrete feature.
- Common modules (can exists one per main module)
  - Core module (`core.module`) --> group all the stuff needed to included just one time. For example
    a whole app service
  - Shared module (`shared.module`) --> group all the angular2 elements that needs every child
    component of the module
  - Routing module (`[app/feature]-routing.module`) --> group all the main module routing related stuff

You can view the file structure [here](docs/architecture/files-structure#application-code)

## Components
Represents the presentation of the app, manages the representation of the services information
with the templates.

You can look as MVC pattern View-Controllers.

### Templates
The MVC view of the application owned by a component, it can have bindings wich represents
the changes at app data.

The file must be located as component file sibling and with the same name except by the extension.

### Styles
All the component specific styles wich are processed to only affect to component template.

The file must be located as component file sibling and with the same name except by the extension.

## Services
Used for manage the app information like the user or the active website along the whole application.

All the services have to be injectables by the `@Injectable()` decorator.

There are two kind of services depending on where are provided:

- Whole app service (singleton) --> provided at any module, in his list of providers. It creates
  a instance of the service at the app injector so the same instance is injected to every
  component, directive, pipe, etc... Create them at modules `core` folder
- Element based service --> provided at element array of providers by the component injector.
  A new instance of the service is created at every component. Create them at modules
  `shared` folder.

You can look as MVC pattern Model-Controllers.

## Directives
Makes appearance and behaviour changes to any html element in order to improve or give additional
functionality.

It can be created at shared module of any main module (app or feature).

## Pipes
Transform the content in order to accomplish some presentation goal, like print numbers or dates
in a special format.

It can be created at shared module of any main module (app or feature).