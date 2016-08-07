

# GDAX Realtime Order Book in Angular2 and Firebase

[![CircleCI](https://circleci.com/gh/OR13/firedax.com.svg?style=shield&circle-token=a4772b0f3e0a6eff62abbda8e416cdca7a974552)](https://circleci.com/gh/OR13/firedax.com)

Thanks to Richard Park for the original [todo-angular2-firebase](https://github.com/r-park/todo-angular2-firebase).

- Angular2 `2.0.0-rc.4`
- Angular2 Router `3.0.0-beta.2`
- AngularFire2 `2.0.0-beta.2`
- Firebase SDK 3
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- RxJS
- SASS
- Typescript
- Webpack
  - Inlines external SCSS files
  - Inlines external HTML templates
  - Bundles and minifies release builds
  - Injects style and script tags into index.html

Quick Start
-----------

```shell
$ git clone https://github.com/OR13/firedax.com.git
$ cd firedax.com
$ npm install
$ npm start
```

Commands
--------

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run dev`|Same as `npm start`|
|`npm run lint`|Lint `.ts` and `.js` files|
|`npm run lint:js`|Lint `.js` files with eslint|
|`npm run lint:ts`|Lint `.ts` files with tslint|
|`npm run server`|Start express server @ `localhost:3000` to serve built artifacts from `./target` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
|`npm run typings`|Install ambient typings|
