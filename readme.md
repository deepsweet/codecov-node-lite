# codecov-lite

[![npm](https://img.shields.io/npm/v/codecov-lite.svg?style=flat-square)](https://www.npmjs.com/package/codecov-lite)
[![build](https://img.shields.io/travis/deepsweet/codecov-node-lite/master.svg?style=flat-square)](https://travis-ci.org/deepsweet/codecov-node-lite)
[![coverage](https://img.shields.io/codecov/c/github/deepsweet/codecov-node-lite/master.svg?style=flat-square)](https://codecov.io/github/deepsweet/codecov-node-lite)
[![deps](https://img.shields.io/gemnasium/deepsweet/codecov-node-lite.svg?style=flat-square)](https://gemnasium.com/deepsweet/codecov-node-lite)

LCOV (code coverage data) uploader for [codecov.io](https://codecov.io/) service. Fork of [codecov.io](https://github.com/cainus/codecov.io) + [codecov-node](https://github.com/codecov/codecov-node) synced with [codecov-bash](https://github.com/codecov/codecov-bash).

* [no](https://github.com/codecov/codecov-node/issues/8) [execSync](https://github.com/codecov/codecov-node/pull/14)
* sync/async services configs
* Promise-based API
* `stdin`-only CLI
* no GCOV features

## Install

```
npm i -D codecov-lite
```

## Usage

### CLI

```
cat coverage/lcov.info | ./node_modules/.bin/codecov
```

### API

```js
import codecov from 'codecov-lite';

const data = 'LCOV as string goes here';

codecov(data)
    .then((result) => {
        console.log(result.config);
        console.log(result.reportURL);
    })
    .catch((error) => {
        console.error('oops', error);
    });
```

## TODO

* [ ] [detect if commit is a merge commit](https://github.com/codecov/codecov-node/pull/14#issuecomment-219293709)
* [ ] more tests
