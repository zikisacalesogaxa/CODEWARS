var assert = require('assert');
var permutations = require('../js/premutations');

describe('Permutations', () => {
	describe('test', () => {
		it('should return Hello world', () => {
			assert.equal(permutations('world'), 'Hello world');
		});
	});
});