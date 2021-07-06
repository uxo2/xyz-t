module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    'prettier/prettier': [
      0,
      {
        printWidth: 120,
        "semi": false,
        "singleQuote": true,
        "printWidth": 120,
        "trailingComma": "none",
        "arrowParens": "avoid",
        "comma-dangle": ["error", "never"]
      }
    ],
    semi: [2, 'never'],
    "react/jsx-uses-react": "off",
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'import/no-anonymous-default-export': [
      2,
      {
        "allowArray": true,
        "allowArrowFunction": true,
        "allowAnonymousClass": true,
        "allowAnonymousFunction": true,
        "allowObject": true
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "object-curly-newline": "off",
    'implicit-arrow-linebreak': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'operator-linebreak': [0, 'none'],
    'arrow-parens': [2, 'as-needed'],
    'max-len': [
      2,
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-plusplus': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
        custom: 'ignore',
        exceptions: [''],
      },
    ],
    "import/prefer-default-export": "off",
    'react/require-default-props': [0],
    'no-shadow': 'off',
    'react/prop-types': [0],
    'react/jsx-wrap-multilines': [
      'error',
      {
        prop: 'ignore',
      },
    ],
    'no-console': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
        allow: ['^.*_'],
      },
    ],
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  }
}
