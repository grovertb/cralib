# cralib

> CLI for creating reusable, modern React libraries using Rollup and create-react-app.

[![NPM](https://img.shields.io/npm/v/cralib.svg)](https://www.npmjs.com/package/cralib) [![Build Status](https://travis-ci.com/transitive-bullshit/cralib.svg?branch=master)](https://travis-ci.com/transitive-bullshit/cralib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Intro

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/grovertb/cralib/master/media/demo.svg">
</p>


## Features

- Easy-to-use CLI
- Handles all modern JS features
- Bundles `cjs` and `es` module formats
- [create-react-app](https://github.com/facebookincubator/create-react-app) for example usage and local dev
- [Rollup](https://rollupjs.org/) for bundling
- [Babel](https://babeljs.io/) for transpiling
- Supports complicated peer-dependencies
- Hundreds of public modules created
- Thorough documentation :heart_eyes:


## Install globally

This package requires `node >= 4`, but we recommend `node >= 8`.

```bash
npm install -g cralib
```

## Usage with npx

```bash
npx cralib
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

## Creating a New Module

```bash
cralib
```

Answer some basic prompts about your module, and then the CLI will perform the following steps:
- copy over the template
- install dependencies via yarn or npm
- link packages together for local development
- initialize local git repo

At this point, your new module should resemble this screenshot and is all setup for local development.

<p align="center">
  <img width="600" src="https://cdn.rawgit.com/grovertb/cralib/master/media/tree.svg">
</p>


Now, anytime you make a change to your library in `packages/library/src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

#### Publishing to npm

```bash
npm publish
```

This builds `cjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.


#### Deploying to Github Pages

```bash
npm run deploy
```

This creates a production build of the example `create-react-app` that showcases your library and then runs `gh-pages` to deploy the resulting bundle.


## License

MIT © [GroverTB](https://github.com/grovertb)
