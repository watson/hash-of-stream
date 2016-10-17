'use strict'

var stream = require('stream')
var assert = require('assert')
var hasher = require('./')

var s

s = new stream.PassThrough()
s.end('foo')
hasher(s, function (hash) {
  assert.equal(hash, '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae')
})

s = new stream.PassThrough()
s.end('foo')
hasher(s, 'sha256', function (hash) {
  assert.equal(hash, '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae')
})

s = new stream.PassThrough()
s.end('foo')
hasher(s, 'sha512', function (hash) {
  assert.equal(hash, 'f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7')
})
