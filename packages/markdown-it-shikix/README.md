# markdown-it-shikix

[Markdown It](https://markdown-it.github.io/) plugin for [shikix](https://github.com/nyxb/shikix)

## Install

```bash
npm i -D markdown-it-shikix
```

## Usage

```ts
import MarkdownIt from 'markdown-it'
import Shikix from 'markdown-it-shikix'

const md = MarkdownIt()

md.use(await Shikix({
   themes: {
      light: 'lumos-light',
      dark: 'lumos-dark',
   }
}))
```

## Features

### Line Highlight

In addition to the features of `shikix`, this plugin also supports line highlighting. You can add `{1,3-4}` after the language name to highlight the specified lines. For example:

~~~md
# Hello World

```js {1,3-4}
console.log('line1') // highlighted
console.log('line2')
console.log('line3') // highlighted
console.log('line4') // highlighted
```
~~~

## License

MIT
