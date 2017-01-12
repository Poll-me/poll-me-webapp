# PollMe Web Application
[![package version](https://img.shields.io/badge/version-0.0.1--alpha.4-blue.svg)](https://gitlabnew.qdqmedia.com/shared-projects/eqonecta)
[![Build Status](https://travis-ci.org/Poll-me/poll-me-webapp.svg?branch=master)](https://travis-ci.org/Poll-me/poll-me-webapp)

[![Build Status](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)

This is the front-end project for the brand new SPA by QDQ Media to bring to the clients
the capacity of manage their data and products information in order to get the max benefit
from the QDQ services.

The project follow this development technology stack:

1. Angular2
1. Webpack
1. Node

And the build outputs all the static files that can be easily served from a web server.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Requirements](#requirements)
- [Start working with the project](#start-working-with-the-project)
- [Development flow](#development-flow)
- [Package scripts](#package-scripts)
- [Enviroments](#enviroments)
- [Architecture](#architecture)
- [Continuous integration (CI)](#continuous-integration-ci)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Requirements
The only thing you need is:

- Node >= 4.x
- Npm >= 3.x

## Start working with the project
To contribute you just need to clone the repo and install the node dependencies, then you
can run any package script.

```bash
# Clone the repo and enter inside
git clone git@gitlabnew.qdqmedia.com:shared-projects/eqonecta.git
cd eqonecta

# install node dependencies
npm install

# Start the dev server with a watcher running
npm start
```

## Development flow
You must follow [this](docs/dev-flow.md) guidelines in order to contribute to the project in any way.

## Package scripts
As the project do not have a task builder like Grunt or Gulp we need to use the npm package scripts
to run the tasks that manage the workflow of the project.

All of this scripts are listed [here](docs/scripts.md)

## Enviroments
This project contemplate many possible environments that are used at different parts
of the source code, for example, at webpack configuration.

- **Development** (`dev`): the environment for develop the project.
  For example at developers computers.
- **Test** (`test`): the environment for the tests execution.
- **Continuous Integration** (`ci`): the environment executed by the CI runner.
- **Production** (`prod`): the environment for serve the production app files.
  For example at deploy environments.

## Architecture
The app have a structure that ensure readability, maintainability and scalability.

When you want to collaborate on the project you **MUST** consider this architecture as
guideline in order to add new functionality.

Details are exposed at specific docs [here](docs/architecture.md)

## Continuous integration (CI)
The central pillar of development flow, all the commits pushed to the remote gitlab
repository have to pass the pipeline of the project at CI to can merge to `develop`
branch and then to `master`.

See the [docs](docs/ci.md).
