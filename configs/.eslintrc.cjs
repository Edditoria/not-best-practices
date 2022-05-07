module.exports = {
	root: true,
	env: {
		// browser: true,
		es2021: true,
		node: true,
		// webextensions: true,
		// serviceworker: true,
	},
	// Require: `npm install --save-dev eslint-config-prettier`.
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'linebreak-style': ['error', 'unix'], // as default in ESLint.
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-double'], // as default in ESLint.
		semi: ['error', 'always'], // as default in ESLint.
	},
};
