<p align="center">
  <a href="https://www.poll-me.com" target="_blank">
    <img width="192" alt="PollMe WebApp" src="src/assets/img/favicon/android-chrome-192x192.png">
  </a>
</p>

# PollMe Web Application

[![GitHub version](https://badge.fury.io/gh/Poll-me%2Fpoll-me-webapp.svg)](https://badge.fury.io/gh/Poll-me%2Fpoll-me-webapp)
[![GitHub release](https://img.shields.io/github/release/Poll-me/poll-me-webapp.svg)](https://github.com/Poll-me/poll-me-webapp/releases)
[![Build Status](https://travis-ci.org/Poll-me/poll-me-webapp.svg)](https://travis-ci.org/Poll-me/poll-me-webapp)
[![GitHub commits](https://img.shields.io/github/commits-since/Poll-me/poll-me-webapp/0.0.1.svg)](https://github.com/Poll-me/poll-me-webapp/compare/v0.0.1...develop)
[![Build Status](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)

This is the awesome app with with you be able to collect in the most easy way any kind of
opinion or preferece from anyone.

For example:

- Are you trying to know the best date to a plan with you friends?  **POLL THEM!!**
- Are you trying to decide which Star Wars movie is better?  **POLL THEM!!**
- Are you trying to find out which friend of yours knows you better? **POLL THEM!!**

[Enter now](https://www.poll-me.com) and try it out, it's **free FOREVER**

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
git clone git@github.com:Poll-me/poll-me-webapp.git
# by HTTPS: https://github.com/Poll-me/poll-me-webapp.git
cd poll-me-webapp

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
The central pillar of development flow, all the commits pushed to the remote github
repository have to pass the pipeline of the project at CI to can merge to `develop`
branch and then to `master`.

The CI of the project is based on [Travis CI](https://travis-ci.org/), you can see the official documentation
[here](https://docs.travis-ci.com/). The configturation of the project that set how
the project is checked at CI is `.travis.yml`, if you want to know more about the CI
configuration for the project see the [official docs](https://docs.travis-ci.com/user/customizing-the-build/).
