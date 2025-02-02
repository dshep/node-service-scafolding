module.exports = {
    // parser: 'babel-',
    parser: '@babel/-parser',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [':recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react']
        },
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react/prop-types': ['off'],
        'react/display-name': ['off'],
        'react/no-unescaped-entities': ['off'],
        indent: ['error', 4],
        //'linebreak-style': ['error', 'unix'],
        //or depending upon OS
        // 'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': [
            'warn',
            { allow: ['clear', 'info', 'error', 'dir', 'trace'] },
        ],
        curly: 'error',
        'no-else-return': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        strict: 'error',
        'symbol-description': 'error',
        yoda: ['error', 'never', { exceptRange: true }],
    },
};