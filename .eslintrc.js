module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
        'plugin:react/recommended', // uses react-specific linting rules
        'plugin:prettier/recommended', // enables eslint-plugin-prettier and eslint-config-prettier
        'prettier/react', // disables react-specific linting rules that conflict with prettier
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jest/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",

        '@typescript-eslint/interface-name-prefix': 1,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        // '@typescript-eslint/member-delimiter-style': {
        //     delimiter: 'none',
        //     requireLast: true,
        // },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    env: {
        browser: true,
        node: true
    }
};
