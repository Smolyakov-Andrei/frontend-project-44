import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'indent': ['error', 2],
      '@stylistic/indent': ['error', 2],
      // ...
    }
  }
]
