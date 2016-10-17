'use strict'

var crypto = require('crypto')

module.exports = hashOfStream

function hashOfStream (stream, algorithm, cb) {
  if (typeof algorithm === 'function') return hashOfStream(stream, 'sha256', algorithm)

  var hash = crypto.createHash(algorithm)

  stream.on('data', function (chunk) {
    hash.update(chunk)
  })

  stream.on('end', function () {
    cb(hash.digest().toString('hex'))
  })
}
