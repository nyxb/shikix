import type { ShikixTransformer } from 'shikix'
import { transformerNotationMap } from './notation-map'

export interface TransformerNotationFocusOptions {
   /**
    * Class for focused lines
    */
   classActiveLine?: string
   /**
    * Class added to the root element when the code has focused lines
    */
   classActivePre?: string
}

/**
 * Allow using `[!code focus]` notation in code to mark focused lines.
 */
export function transformerNotationFocus(
   options: TransformerNotationFocusOptions = {},
): ShikixTransformer {
   const {
      classActiveLine = 'focused',
      classActivePre = 'has-focused',
   } = options

   return transformerNotationMap(
      {
         classMap: {
            focus: classActiveLine,
         },
         classActivePre,
      },
      'shikix-transformers:notation-focus',
   )
}
