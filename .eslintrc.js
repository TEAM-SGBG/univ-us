module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: ['airbnb'],
  rules: {
    'linebreak-style': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'import/no-unresolved': [0],
    'react/jsx-no-bind': [0],
    'react/jsx-props-no-spreading': 'warn',
  },
};
