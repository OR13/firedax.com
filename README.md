[![GitHub version](https://badge.fury.io/gh/OR13%2firedax.com.svg)](https://badge.fury.io/gh/OR13%2Ffiredax.com) 
[![Dependency Status](https://david-dm.org/OR13/firedax.com.svg)](https://david-dm.org/OR13/firedax.com)
[![Issue Stats](http://issuestats.com/github/OR13/firedax.com/badge/pr?style=flat)](http://issuestats.com/github/OR13/firedax.com)
[![Issue Stats](http://issuestats.com/github/OR13/firedax.com/badge/issue?style=flat)](http://issuestats.com/github/OR13/firedax.com) 
[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/OR13/angular-2-webpack-starter)

### [Thanks to AngularClass!](https://github.com/AngularClass/angular2-webpack-starter/tree/material2)

* Best practices in file and application organization for Angular 2.
* Ready to go build system using Webpack for working with TypeScript.
* Angular 2 examples that are ready to go when experimenting with Angular 2.
* A great Angular 2 seed repo for anyone who wants to start their project.
* Testing Angular 2 code with Jasmine and Karma.
* Coverage with Istanbul and Karma
* End-to-end Angular 2 code using Protractor.
* Type manager with Typings
* Hot Module Replacement with Webpack
* Material Design with [angular/material2](https://github.com/angular/material2)

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/OR13/firedax.com.git

# change directory to our repo
cd firedax.com

# WINDOWS ONLY
# add required global libraries `typings webpack-dev-server rimraf webpack`
npm install -g typings webpack-dev-server rimraf webpack

# install the repo with npm
npm install

# WINDOWS ONLY
# install typings
npm run typings-install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [Typings](#typings)
* [License](#license)


## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
firedax.com/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.conf.js     * protractor config for our end-to-end tests
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.ts              * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   ├──app.e2e.ts         * a simple end-to-end test for /
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   └──assets/                * static assets are served here
 │       ├──icon/              * our list of icons from www.favicon-generator.org
 │       ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │       ├──robots.txt         * for search engines to crawl your website
 │       └──human.txt          * for humans to know who the developers are
 │
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──typings.json               * our typings manager
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typings` (`npm install --global typings`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install typings webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies
* `typings install` to install necessary typings
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production
npm run build:prod
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# make sure you have your server running in another terminal
npm run e2e
```

### run webdriver (for end-to-end)
```bash
npm run webdriver:update
npm run webdriver:start
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 1.7.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

# Typings
> When you include a module that doesn't include Type Definitions inside of the module you need to include external Type Definitions with Typings

## Use latest Typings module
```
npm install --global typings
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with typings

```
typings install dt~node --save --global
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```

You can include your type definitions in this file until you create one for the typings registry
see [typings/registry](https://github.com/typings/registry)

# License
 [MIT](/LICENSE)
