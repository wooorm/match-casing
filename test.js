import test from 'tape'
import {matchCasing} from './index.js'

test('matchCasing(value, base)', function (t) {
  t.equal(matchCasing('foo', 'BAZ'), 'FOO')
  t.equal(matchCasing('foo', 'Baz'), 'Foo')
  t.equal(matchCasing('foo', 'baz'), 'foo')
  t.equal(matchCasing('foo', 'BaZ'), 'foo')

  t.equal(matchCasing('FOO', 'BAZ'), 'FOO')
  t.equal(matchCasing('FOO', 'Baz'), 'Foo')
  t.equal(matchCasing('FOO', 'baz'), 'foo')
  t.equal(matchCasing('FOO', 'BaZ'), 'FOO')

  t.equal(matchCasing('Foo', 'BAZ'), 'FOO')
  t.equal(matchCasing('Foo', 'Baz'), 'Foo')
  t.equal(matchCasing('Foo', 'baz'), 'foo')
  t.equal(matchCasing('Foo', 'BaZ'), 'Foo')

  t.equal(matchCasing('’90S', '’twas'), '’90s')
  t.equal(matchCasing('’90S', '’Twas'), '’90S')
  t.equal(matchCasing('’90S', '’TWAS'), '’90S')

  t.equal(matchCasing('’N’', 'a'), '’n’')
  t.equal(matchCasing('’N’', 'A'), '’N’')
  t.equal(matchCasing('’N’', ''), '’N’')

  t.end()
})
