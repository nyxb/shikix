import type { ShikixTransformer } from 'shikix'
import { addClassToHast } from 'shikix'

export interface TransformerCompactLineOption {
   /**
    * 1-based line number.
    */
   line: number
   classes?: string[]
}

/**
 * Transformer for `shiki`'s legacy `lineOptions`
 */
export function transformerCompactLineOptions(
   lineOptions: TransformerCompactLineOption[] = [],
): ShikixTransformer {
   return {
      name: 'shikix-transformers:compact-line-options',
      line(node, line) {
         const lineOption = lineOptions.find(o => o.line === line)
         if (lineOption?.classes)
            addClassToHast(node, lineOption.classes)
         return node
      },
   }
}
