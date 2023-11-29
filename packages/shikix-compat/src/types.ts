import type {
   BuiltinLanguage,
   BuiltinTheme,
   BundledHighlighterOptions,
   CodeOptionsMultipleThemes,
   CodeOptionsSingleTheme,
   CodeToHastOptionsCommon,
   IRawGrammar,
   LanguageRegistration,
   StringLiteralUnion,
   ThemeRegistration,
   ThemeRegistrationRaw,
} from 'shikix'

export interface LineOption {
   /**
    * 1-based line number.
    */
   line: number
   classes?: string[]
}

export interface OptionsOfLineOptions {
   lineOptions?: LineOption[]
}

export interface AnsiToHtmlOptions extends OptionsOfLineOptions {
   theme?: StringLiteralUnion<BuiltinTheme>
}

export interface HighlighterOptions extends BundledHighlighterOptions<BuiltinLanguage, BuiltinTheme> {
   theme?: BuiltinTheme
}

export type IThemeRegistration = ThemeRegistrationRaw | ThemeRegistration | StringLiteralUnion<BuiltinTheme>

export interface IShikiTheme extends ThemeRegistration {}

export interface ILanguageRegistration extends LanguageRegistration {
   grammar?: IRawGrammar
}

export type Lang = StringLiteralUnion<BuiltinLanguage>
export type Theme = StringLiteralUnion<BuiltinTheme>

export type CodeToHtmlOptions = (
   | Partial<CodeOptionsSingleTheme<BuiltinTheme>>
   | Partial<CodeOptionsMultipleThemes<BuiltinTheme>>
)
& CodeToHastOptionsCommon<BuiltinLanguage>
& OptionsOfLineOptions

export type CodeToHtmlOptionsExtra =
   & Omit<CodeToHastOptionsCommon<BuiltinLanguage>, 'lang'>
   & OptionsOfLineOptions
