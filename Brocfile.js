'use strict';

module.exports = require('./')('fixture', {
	autoprefixer: {
		browsers: ['last 5 versions', 'Android 2.3'],
		cascade: false
	},
	import: {
		path: 'fixture'
	},
	mqpacker: true
});
