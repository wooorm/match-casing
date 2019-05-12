# match-casing [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Match the case of `value` to that of `base`.

## Installation

[npm][npm-install]:

```bash
npm install match-casing
```

## Usage

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

The third case, where `value` takes on a capitalised, deals with
initial non-alphabetical characters as expected.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/match-casing.svg

[travis]: https://travis-ci.org/wooorm/match-casing

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/match-casing.svg

[codecov]: https://codecov.io/github/wooorm/match-casing

[npm-install]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
