import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

// @ts-expect-error - no types
import { wasmPlugin } from './packages/shikix/rollup.config.mjs'

export default defineConfig({
   plugins: [
      wasmPlugin(),
   ],
   resolve: {
      alias: {
         'shikix': fileURLToPath(new URL('./packages/shikix/src/index.ts', import.meta.url)),
         'shikix/core': fileURLToPath(new URL('./packages/shikix/src/core/index.ts', import.meta.url)),
         'shikix-transformers': fileURLToPath(new URL('./packages/shikix-transformers/src/index.ts', import.meta.url)),
      },
   },
   test: {
      server: {
         deps: {
            inline: [
               /\.wasm/,
            ],
         },
      },
      coverage: {
         provider: 'v8',
         include: [
            '**/packages/*/src/**/*.ts',
         ],
         exclude: [
            '**/src/oniguruma/**',
            '**/src/assets/**',
            '**/node_modules/**',
            '**/dist/**',
            '**/stackElementMetadata.ts',
         ],
      },
      poolOptions: {
         threads: {
            singleThread: true,
         },
      },
   },
})
