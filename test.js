'use strict';

var test = require('tape');
var casing = require('.');

test('match-casing', function (t) {
  t.equal(casing('foo', 'BAZ'), 'FOO');
  t.equal(casing('foo', 'Baz'), 'Foo');
  t.equal(casing('foo', 'baz'), 'foo');
  t.equal(casing('foo', 'BaZ'), 'foo');

  t.equal(casing('FOO', 'BAZ'), 'FOO');
  t.equal(casing('FOO', 'Baz'), 'Foo');
  t.equal(casing('FOO', 'baz'), 'foo');
  t.equal(casing('FOO', 'BaZ'), 'FOO');

  t.equal(casing('Foo', 'BAZ'), 'FOO');
  t.equal(casing('Foo', 'Baz'), 'Foo');
  t.equal(casing('Foo', 'baz'), 'foo');
  t.equal(casing('Foo', 'BaZ'), 'Foo');

  t.equal(casing('’90S', '’twas'), '’90s');
  t.equal(casing('’90S', '’Twas'), '’90S');
  t.equal(casing('’90S', '’TWAS'), '’90S');

  t.equal(casing('’N’', 'a'), '’n’');
  t.equal(casing('’N’', 'A'), '’N’');
  t.equal(casing('’N’', ''), '’N’');

  t.end();
});
