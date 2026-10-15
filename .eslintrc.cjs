module.exports = {
  root: true,
  ignorePatterns: ['dist', 'coverage', 'node_modules'],
  overrides: [
    {
      files: ['ehr-admin-backend/**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      rules: { '@typescript-eslint/no-explicit-any': 'off' },
    },
    {
      files: ['ehr-admin-frontend/**/*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    },
  ],
};
