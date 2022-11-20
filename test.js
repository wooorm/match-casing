import assert from 'node:assert/strict'
import test from 'node:test'
import {matchCasing} from './index.js'

test('matchCasing(value, base)', function () {
  assert.equal(matchCasing('foo', 'BAZ'), 'FOO')
  assert.equal(matchCasing('foo', 'Baz'), 'Foo')
  assert.equal(matchCasing('foo', 'baz'), 'foo')
  assert.equal(matchCasing('foo', 'BaZ'), 'foo')

  assert.equal(matchCasing('FOO', 'BAZ'), 'FOO')
  assert.equal(matchCasing('FOO', 'Baz'), 'Foo')
  assert.equal(matchCasing('FOO', 'baz'), 'foo')
  assert.equal(matchCasing('FOO', 'BaZ'), 'FOO')

  assert.equal(matchCasing('Foo', 'BAZ'), 'FOO')
  assert.equal(matchCasing('Foo', 'Baz'), 'Foo')
  assert.equal(matchCasing('Foo', 'baz'), 'foo')
  assert.equal(matchCasing('Foo', 'BaZ'), 'Foo')

  assert.equal(matchCasing('’90S', '’twas'), '’90s')
  assert.equal(matchCasing('’90S', '’Twas'), '’90S')
  assert.equal(matchCasing('’90S', '’TWAS'), '’90S')

  assert.equal(matchCasing('’N’', 'a'), '’n’')
  assert.equal(matchCasing('’N’', 'A'), '’N’')
  assert.equal(matchCasing('’N’', ''), '’N’')
})
