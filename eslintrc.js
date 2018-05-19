module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  'parserOptions': {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      jsx: true
    }
  },
  'extends': [
    'standard',
    'plugin:react/recommended'
  ],
  'rules': {
    'react-in-jsx-scope': 'off',
    'react/display-name': 'warn',
    'react/prop-types': 'error',
    'react/no-unescaped-entities': 'off'
  },
  globals: {
    'React': true,
    '__DEV__': true,
    'Raven': true,
    'API_BASE_URL': true,
    'fdescribe': true,
    'describe': true,
    'it': true,
    'fit': true,
    'xit': true,
    'expect': true,
    'afterEach': true,
    'beforeEach': true,
    'afterAll': true,
    'beforeAll': true,
    'jest': true,
    'fetch': true
  }
}
