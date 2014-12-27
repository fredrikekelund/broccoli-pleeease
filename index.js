'use strict';

var Filter = require('broccoli-filter');
var pleeease = require('pleeease');

function PleeeaseFilter(inputTree, options) {
	if (!(this instanceof PleeeaseFilter)) {
		return new PleeeaseFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

PleeeaseFilter.prototype = Object.create(Filter.prototype);
PleeeaseFilter.prototype.constructor = PleeeaseFilter;

PleeeaseFilter.prototype.extensions = ['css'];
PleeeaseFilter.prototype.targetExtension = 'css';

PleeeaseFilter.prototype.processString = function (str, relativePath) {
	var result = pleeease.process(str, this.options);
	return result.css || result;
};

module.exports = PleeeaseFilter;
