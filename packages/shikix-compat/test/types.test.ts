import { expect, it } from 'vitest'
import * as shiki from 'shiki'
import * as shikix from '../src/index'

it('run', async () => {
   const s = await shiki.getHighlighter({
      theme: 'nord',
      langs: ['javascript'],
   })

   const sj = await shikix.getHighlighter({
      theme: 'nord',
      langs: ['javascript'],
   })

   expect(s.getLoadedThemes()).toEqual(sj.getLoadedThemes())
   expect(s.getLoadedLanguages()).toEqual(sj.getLoadedLanguages())

   expect(sj.codeToThemedTokens('const a = 1', 'javascript'))
      .toEqual(s.codeToThemedTokens('const a = 1', 'javascript'))

   s.codeToHtml('const a = 1', 'javascript')
   sj.codeToHtml('const a = 1', 'javascript')
   s.codeToHtml('const a = 1', 'javascript', 'nord')
   sj.codeToHtml('const a = 1', 'javascript', 'nord')

   s.codeToHtml('const a = 1', { lang: 'javascript' })
   sj.codeToHtml('const a = 1', { lang: 'javascript' })

   s.ansiToHtml('const a = 1', { theme: 'nord' })
   sj.ansiToHtml('const a = 1', { theme: 'nord' })

   const shikiKeys = Object.keys(s)
   const shikixKeys = Object.keys(sj)
   const keysDiff = shikiKeys.filter(k => !shikixKeys.includes(k))

   expect.soft(keysDiff).toMatchInlineSnapshot(`
    [
      "getBackgroundColor",
      "getForegroundColor",
      "setColorReplacements",
    ]
  `)

   const shikiExports = Object.keys(shiki)
   const shikixExports = Object.keys(shikix)
   const exportsDiff = shikiExports.filter(k => !shikixExports.includes(k))

   expect.soft(exportsDiff).toMatchInlineSnapshot(`
    [
      "FontStyle",
      "renderToHtml",
    ]
  `)
})
