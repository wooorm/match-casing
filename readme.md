# match-casing

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Match the case of `value` to that of `base`.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install match-casing
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

This package exports the following identifiers: `matchCasing`.
There is no default export.

### `matchCasing(value, base)`

Transform the case in `value` (`string`) to match that of `base` (`string`).

## Algorithm

*   If `base` is uppercase, `value` is uppercased
*   Else, if `base` is lowercase, `value` is lowercased
*   Else, if the first alphabetic character in `base` is uppercase,
    and the rest of `base` is lowercase, uppercase the first alphabetic
    character in `value` and lowercase the rest
*   Else, return `value` unmodified

The third case, where `value` takes on a capitalized, deals with initial
non-alphabetical characters as expected.

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

[license]: license

[author]: https://wooorm.com
