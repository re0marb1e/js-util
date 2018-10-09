"use strict"

const arrayExtend = require('./lib/array.extend');
const stringExtend = require('./lib/string.extend');

module.exports = {
	extend: {
		Array: arrayExtend,
		String: stringExtend
	}
}