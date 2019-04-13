# codecov-lite

[![npm](https://img.shields.io/npm/v/codecov-lite.svg?style=flat-square)](https://www.npmjs.com/package/codecov-lite)
[![tests](https://img.shields.io/travis/deepsweet/codecov-node-lite/master.svg?label=tests&style=flat-square)](https://travis-ci.org/deepsweet/codecov-node-lite)
[![coverage](https://img.shields.io/codecov/c/github/deepsweet/codecov-node-lite/master.svg?style=flat-square)](https://codecov.io/github/deepsweet/codecov-node-lite)

LCOV (code coverage data) uploader for [codecov.io](https://codecov.io/) service. Synced with [codecov-node](https://github.com/codecov/codecov-node) and [codecov-bash](https://github.com/codecov/codecov-bash).

* no CLI
* no local Git
* Promise-based API

## Supported services

* [AppVeyor](https://www.appveyor.com/)
* [Buildkite](https://buildkite.com/)
* [CircleCI](https://circleci.com/)
* [Codeship](https://codeship.com/)
* [drone.io](https://drone.io/)
* [GitLab](https://gitlab.com/)
* [Jenkins](https://jenkins.io/)
* [Semaphore](https://semaphoreci.com/)
* [Shippable](https://app.shippable.com/)
* [Snap CI](https://snap-ci.com/)
* [Travis CI](https://travis-ci.org/)
* [Wercker](http://wercker.com/)

## Requirements

* Node.js >= 8.6.0

## Install

```sh
$ yarn add --dev codecov-lite
```

## Usage

```js
import codecov from 'codecov-lite'

(async () => {
  const [ reportURL, config ] = await codecov(process.env, 'LCOV DATA')
})()
```
