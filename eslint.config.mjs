import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
  ignores: [
    '.env.*',
  ],
})
