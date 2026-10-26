import js from '@eslint/js';
import {defineConfig} from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		files: ['**/*.{ts,tsx}'],
		extends: [js.configs.recommended],
		languageOptions: {
			parser: tseslint.parser,
			globals: globals.browser,
		},
		rules: {
			...js.configs.recommended.rules,
		},
	},
]);
