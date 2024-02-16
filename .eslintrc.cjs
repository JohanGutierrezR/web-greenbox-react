module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
  
	extends: [
		'standard',
		'plugin:react/jsx-runtime',
		'plugin:react/recommended',
		'eslint-config-prettier',
	],
	overrides: [
		{
			files: ['.eslintrc.js', '.eslintrc.cjs'],
			env: {
				node: true,
			},
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	plugins: ['react'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {},
};
