module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: [
		'vue',
	],
	rules: {
		strict: 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
		'import/extensions': ['error', 'always', {
			js: 'never',
			vue: 'never',
		}],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.vue'],
			},
		},
	},
};
