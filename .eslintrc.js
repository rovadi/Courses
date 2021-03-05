module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parser: '@babel/eslint-parser',
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		requireConfigFile: false,
	},
	plugins: ['prettier'],
};
