# [broccoli](https://github.com/joliss/broccoli)-pleeease [![Build Status](https://travis-ci.org/fredrikekelund/broccoli-pleeease.svg?branch=master)](https://travis-ci.org/fredrikekelund/broccoli-pleeease)

> Postprocess CSS using [Pleeease](http://pleeease.io/)

## Install

```sh
$ npm install --save-dev broccoli-pleeease
```

## Usage

```js
var pleeease = require('broccoli-pleeease');
var tree = 'fixture';
var options = {
    autoprefixer: {
        browsers: ['last 5 versions', 'Android 2.3'],
        cascade: false
    },
    import: {
        path: 'fixture'
    },
    mqpacker: true
};

module.exports = pleeease(tree, options);
```

## Inlining @import'ed files

In Broccoli, file paths in plugins are resolved relative to the Brocfile per default, not to each processed file. Therefore, it's possible that pleeease will throw an error upon trying to inline any files you've imported in your CSS, since the `@import` paths won't line up properly between pleeease and your source files.

To work around this, you can specify a `path` property that's the same as the root of your Broccoli tree on the `import` object in the options you pass to pleeease. **Imports deeper than one level will however not be resolved correctly with this solution!**

## License

MIT © [Fredrik Ekelund](http://fredrik.computer)
