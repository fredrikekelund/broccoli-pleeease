# [broccoli](https://github.com/joliss/broccoli)-pleeease [![Build Status](https://travis-ci.org/fredrikekelund/broccoli-pleeease.svg?branch=master)](https://travis-ci.org/fredrikekelund/broccoli-pleeease)

> Postprocess CSS using [Pleeease](http://pleeease.io/)

## DEPRECATED

This module has been deprecated in favor of working directly with PostCSS. Please look to [broccoli-postcss](https://github.com/jeffjewiss/broccoli-postcss) for a full post-processing solution, and [broccoli-sass](https://www.npmjs.com/package/broccoli-sass), [broccoli-less-single](https://www.npmjs.com/package/broccoli-less-single) or [broccoli-stylus-single](https://www.npmjs.com/package/broccoli-stylus-single) for preprocessing.

Here's the full list of PostCSS plugins used by Pleeease:

- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [css-mqpacker](https://www.npmjs.com/package/css-mqpacker)
- [csswring](https://www.npmjs.com/package/csswring)
- [pixrem](https://www.npmjs.com/package/pixrem)
- [pleeease-filters](https://www.npmjs.com/package/pleeease-filters)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [postcss-opacity](https://www.npmjs.com/package/postcss-opacity)
- [postcss-pseudoelements](https://www.npmjs.com/package/postcss-pseudoelements)
- [postcss-url](https://www.npmjs.com/package/postcss-url)
- [postcss-vmin](https://www.npmjs.com/package/postcss-vmin)

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

To work around this, you can specify a `path` property that's the same as the root of your Broccoli tree on the `import` object in the options you pass to pleeease. This only works for `@import` statements in files that reside at the root of the Broccoli tree, though.

## License

MIT © [Fredrik Ekelund](http://fredrik.computer)
