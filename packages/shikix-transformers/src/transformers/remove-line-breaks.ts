import type { ShikixTransformer } from 'shikix'

/**
 * Remove line breaks between lines.
 * Useful when you override `display: block` to `.line` in CSS.
 */
export function transformerRemoveLineBreak(): ShikixTransformer {
   return {
      name: 'shikix-transformers:remove-line-break',
      code(code) {
         code.children = code.children.filter(line => !(line.type === 'text' && line.value === '\n'))
      },
   }
}
