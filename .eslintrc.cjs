module.exports = {
  env: {
    es6: true,
    node: true,
    'jest/globals': true
  },
  plugins: [
    'node',
    'prefer-arrow',
    'jsdoc',
    'jest',
    'jest-formatting',
    'security',
    'security-node'
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:jsdoc/recommended',
    'plugin:security/recommended',
    'plugin:security-node/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 9
  },
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'brace-style': [
      'error',
      '1tbs', { allowSingleLine: true }
    ],
    camelcase: [
      'error',
      {
        allow: [
          'tours_id',
          'photos_id',
          'tracks_id'
        ]
      }
    ],
    'comma-dangle': 'error',
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'off',
    'eol-last': 'error',
    eqeqeq: [
      'error',
      'smart'
    ],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean'
    ],
    'id-match': 'error',
    indent: [
      'error',
      2
    ],
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-param-names': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/newline-after-description': 'off',
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix'
    ],
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 140
      }
    ],
    'mocha/no-mocha-arrows': 'off',
    'new-parens': 'off',
    'no-array-constructor': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'log',
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-debugger': 'error',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': [
      'error',
      'rxjs/Rx'
    ],
    'no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': [
      'error',
      {
        enforceInMethodNames: false,
        allowAfterThis: true
      }
    ],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'nonblock-statement-body-position': [
      'error',
      'beside'
    ],
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        allowStandaloneDeclarations: true
      }
    ],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: ['error', 'single'],
    radix: 'error',
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          '/'
        ]
      }
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off'
  }
};
