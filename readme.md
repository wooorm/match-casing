# match-casing [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Match the case of `value` to that of `base`.

## Installation

[npm][npm-install]:

```bash
npm install match-casing
```

## Usage

```js
var casing = require('match-casing');

console.log(casing('foo', 'BAZ')); // FOO
console.log(casing('foo', 'Baz')); // Foo
console.log(casing('foo', 'baz')); // foo
console.log(casing('foo', 'BaZ')); // foo

console.log(casing('FOO', 'BAZ')); // FOO
console.log(casing('FOO', 'Baz')); // Foo
console.log(casing('FOO', 'baz')); // foo
console.log(casing('FOO', 'BaZ')); // FOO

console.log(casing('Foo', 'BAZ')); // FOO
console.log(casing('Foo', 'Baz')); // Foo
console.log(casing('Foo', 'baz')); // foo
console.log(casing('Foo', 'BaZ')); // Foo

console.log(casing('’90S', '’twas')); // ’90s
console.log(casing('’N’', 'a')); // ’n’
```

## API

### `matchCasing(value, base)`

###### Parameters

*   `value` (`string`) — Value whose case to change.
*   `match` (`string`) — Value whose case to match.

###### Returns

`string` — `value`, but cased as `base`.

## Algorithm

*   If `base` is uppercase, `value` is uppercased;
*   Else, if `base` is lowercase, `value` is lowercased;
*   Else, if the first alphabetic character in `base` is uppercase,
    and the rest of `base` is lowercase, uppercase the first alphabetic
    character in `value` and lowercase the rest.
*   Else, return `value` unmodified.

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

[license]: LICENSE

[author]: http://wooorm.com
