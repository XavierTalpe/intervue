module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8,
    },
    env: {
        browser: true,
        jest: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:vue/recommended'
    ],
    plugins: [
        // TODO: In the future we want to turn this off when making a build
        'only-warn'
    ],
    rules: {
        'arrow-body-style': 0,
        'comma-dangle': 0,
        "indent": [1, 4],
        'import/no-unresolved': 0, // Doesn't work in .vue files anyway
        'global-require': 0,
        'max-len': ['warn', {code: 140}],
        'no-else-return': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-shadow': 0,
        'object-curly-spacing': 0,
        'operator-linebreak': 0,
        'semi': 0,
        "skipBlankLines": true,
        'vue/component-name-in-template-casing': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/html-indent': ['warn', 4],
        'vue/max-attributes-per-line': 'warn'
    }
};
