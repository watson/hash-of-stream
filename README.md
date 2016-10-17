# hash-of-stream

Given a readable stream, calls a callback with the hash of the data.

[![Build status](https://travis-ci.org/watson/hash-of-stream.svg?branch=master)](https://travis-ci.org/watson/hash-of-stream)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Usage

```js
var fs = require('fs')
var hasher = require('hash-of-stream')

var file = fs.createReadStream(__filename)

hasher(file, function (hash) {
  console.log('The hash of %s is %s', __filename, hash)
})
```

## API

```js
hasher(stream, [algorithm], callback)
```

- `stream` must be a readable stream
- `algorithm` is optional and will default to `sha256`
- `callback` will be called with the hash of the data in the given
  stream once the stream ends

## License

MIT
