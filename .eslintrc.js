module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    "ignorePatterns": ["graphql-types.ts", "node_modules/", '*.js'],
    'globals': {
        __PATH_PREFIX__: true
    },
    "overrides": [
        {
            "files": ['src/**/*']
        }
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    'rules': {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        "react/prop-types": "off",
    }
};
