// we could extend REPO_ROOT/.eslintrc here
module.exports = {
  extends: ['plugin:@next/next/recommended'],
  rules: {
    'react/no-unknown-property': ['warn', { ignore: ['css'] }],
  },
};
