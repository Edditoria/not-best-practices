module.exports = {
	root: true,
	env: {
		// browser: true,
		es2021: true,
		node: true,
		// webextensions: true,
		// serviceworker: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'unix'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'], // Default: 'always'.
	},
};
