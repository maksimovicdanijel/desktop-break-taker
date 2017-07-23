module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'standard',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-new': 0,
    'no-trailing-spaces': 0
  }
}
