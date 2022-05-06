module.exports = {
	plugins: [
		'cypress'
	],
	env: {
		mocha: true,
		'cypress/globals': true
	},
	rules: {
		strict: 'off',
		indent: [4, 'tab'],
		'no-tabs': 0
	}
}
