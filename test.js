'use strict';

var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should prefix, import and minify the CSS', function () {
	assert.equal(
		fs.readFileSync('temp/test.css', 'utf8'),
		fs.readFileSync('fixture/expected.css', 'utf8')
	);
});
