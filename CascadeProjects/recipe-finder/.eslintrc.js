module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    // Allow HTML attributes in React components
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ],
    // Allow 'noopener' and 'noreferrer' attributes
    'react/no-unknown-property': ['error', {
      ignore: ['noopener', 'noreferrer']
    }]
  }
};
