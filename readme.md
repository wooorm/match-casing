# match-casing

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Match the case of `value` to that of `base`.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`matchCasing(value, base)`](#matchcasingvalue-base)
*   [Types](#types)
*   [Algorithm](#algorithm)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package matches the case (lowercase, uppercase, capitalized) of a string to
that of another string.

## When should I use this?

This package is useful if a user wrote some word, and you want to suggest a
replacement, and want to make sure that the suggestion matches that of the
original.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install match-casing
```

In Deno with [Skypack][]:

```js
import {matchCasing} from 'https://cdn.skypack.dev/match-casing@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {matchCasing} from 'https://cdn.skypack.dev/match-casing@2?min'
</script>
```

## Use

```js
import {matchCasing} from 'match-casing'

matchCasing('foo', 'BAZ') // => 'FOO'
matchCasing('foo', 'Baz') // => 'Foo'
matchCasing('foo', 'baz') // => 'foo'
matchCasing('foo', 'BaZ') // => 'foo'

matchCasing('FOO', 'BAZ') // => 'FOO'
matchCasing('FOO', 'Baz') // => 'Foo'
matchCasing('FOO', 'baz') // => 'foo'
matchCasing('FOO', 'BaZ') // => 'FOO'

matchCasing('Foo', 'BAZ') // => 'FOO'
matchCasing('Foo', 'Baz') // => 'Foo'
matchCasing('Foo', 'baz') // => 'foo'
matchCasing('Foo', 'BaZ') // => 'Foo'

matchCasing('’90S', '’twas') // => '’90s'
matchCasing('’N’', 'a') // => '’n’'
```

## API

This package exports the following identifier: `matchCasing`.
There is no default export.

### `matchCasing(value, base)`

Transform the case in `value` (`string`) to match that of `base` (`string`).

## Types

This package is fully typed with [TypeScript][].
There are no extra exported types.

## Algorithm

*   If `base` is uppercase, `value` is uppercased
*   Else, if `base` is lowercase, `value` is lowercased
*   Else, if the first alphabetic character in `base` is uppercase,
    and the rest of `base` is lowercase, uppercase the first alphabetic
    character in `value` and lowercase the rest
*   Else, return `value` unmodified

The third case deals with initial non-alphabetical characters as expected.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`words/emoji-emotion`](https://github.com/words/emoji-emotion)
    — list of emoji rated for valence
*   [`wooorm/emoticon`](https://github.com/wooorm/emoticon)
    — info on ASCII emoticons
*   [`wooorm/strip-skin-tone`](https://github.com/wooorm/strip-skin-tone)
    — Strip skin-tones from emoji
*   [`wooorm.com/checkmoji`](https://wooorm.com/checkmoji/)
    — Check emoji across platforms

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/match-casing/workflows/main/badge.svg

[build]: https://github.com/wooorm/match-casing/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/match-casing.svg

[coverage]: https://codecov.io/github/wooorm/match-casing

[downloads-badge]: https://img.shields.io/npm/dm/match-casing.svg

[downloads]: https://www.npmjs.com/package/match-casing

[size-badge]: https://img.shields.io/bundlephobia/minzip/match-casing.svg

[size]: https://bundlephobia.com/result?p=match-casing

[npm]: https://docs.npmjs.com/cli/install

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
