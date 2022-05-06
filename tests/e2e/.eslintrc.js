module.exports = {
	plugins: [
		'cypress',
	],
	env: {
		mocha: true,
		'cypress/globals': true,
	},
	rules: {
		strict: 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
				vue: 'never',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
			},
		},
	},
};
