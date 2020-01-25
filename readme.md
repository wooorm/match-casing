# match-casing

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Match the case of `value` to that of `base`.

## Install

[npm][]:

```sh
npm install match-casing
```

## Use

```js
var casing = require('match-casing')

casing('foo', 'BAZ') // => 'FOO'
casing('foo', 'Baz') // => 'Foo'
casing('foo', 'baz') // => 'foo'
casing('foo', 'BaZ') // => 'foo'

casing('FOO', 'BAZ') // => 'FOO'
casing('FOO', 'Baz') // => 'Foo'
casing('FOO', 'baz') // => 'foo'
casing('FOO', 'BaZ') // => 'FOO'

casing('Foo', 'BAZ') // => 'FOO'
casing('Foo', 'Baz') // => 'Foo'
casing('Foo', 'baz') // => 'foo'
casing('Foo', 'BaZ') // => 'Foo'

casing('’90S', '’twas') // => '’90s'
casing('’N’', 'a') // => '’n’'
```

## API

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

[build-badge]: https://img.shields.io/travis/wooorm/match-casing.svg

[build]: https://travis-ci.org/wooorm/match-casing

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/match-casing.svg

[coverage]: https://codecov.io/github/wooorm/match-casing

[downloads-badge]: https://img.shields.io/npm/dm/match-casing.svg

[downloads]: https://www.npmjs.com/package/match-casing

[size-badge]: https://img.shields.io/bundlephobia/minzip/match-casing.svg

[size]: https://bundlephobia.com/result?p=match-casing

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
