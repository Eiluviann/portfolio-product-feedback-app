// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const configPrettier = require('eslint-config-prettier');
const prettier = require('eslint-plugin-prettier');

module.exports = tseslint.config(
	{
		plugins: {
			prettier,
		},
	},
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
		],
		processor: angular.processInlineTemplates,
		rules: {
			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'app',
					style: 'kebab-case',
				},
			],
			'prettier/prettier': 'error',
		},
	},
	{
		files: ['**/*.html'],
		extends: [
			'plugin:@angular-eslint/template/process-inline-templates',
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility,
		],
		rules: {},
	},
	{
		...configPrettier,
	},
);
