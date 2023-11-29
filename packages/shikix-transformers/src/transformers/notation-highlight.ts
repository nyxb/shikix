import type { ShikixTransformer } from 'shikix'
import { transformerNotationMap } from './notation-map'

export interface TransformerNotationHighlightOptions {
   /**
    * Class for highlighted lines
    */
   classActiveLine?: string
   /**
    * Class added to the root element when the code has highlighted lines
    */
   classActivePre?: string
}

/**
 * Allow using `[!code highlight]` notation in code to mark highlighted lines.
 */
export function transformerNotationHighlight(
   options: TransformerNotationHighlightOptions = {},
): ShikixTransformer {
   const {
      classActiveLine = 'highlighted',
      classActivePre = 'has-highlighted',
   } = options

   return transformerNotationMap(
      {
         classMap: {
            highlight: classActiveLine,
            hl: classActiveLine,
         },
         classActivePre,
      },
      'shikix-transformers:notation-highlight',
   )
}
