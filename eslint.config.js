import nyxb from '@nyxb/eslint-config'

export default nyxb(
   {
      ignores: [
         'packages/shikix/src/assets/*.ts',
         '**/fixtures/**',
      ],
   },
   {
      rules: {
         'no-restricted-syntax': 'off',
         'ts/no-invalid-this': 'off',
      },
   },
)
