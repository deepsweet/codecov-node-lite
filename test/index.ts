import test from 'blue-tape'
import { createSpy, getSpyCalls } from 'spyfn'
import { mock, unmock } from 'mocku'
import { TEnv } from '../src/types'

test('codecov', async (t) => {
  const postSpy = createSpy(() => Promise.resolve('reportURL\nputURL'))
  const putSpy = createSpy(() => {})

  mock('../src/index', {
    'request-promise-native': {
      default: {
        post: postSpy,
        put: putSpy
      }
    },
    './getCurrentConfig': {
      default: (env: TEnv) => Promise.resolve(env)
    }
  })

  const { default: codecov } = await import('../src/index')

  const result = await codecov({ foo: '1', bar: '2' }, 'data')

  t.deepEqual(
    getSpyCalls(postSpy),
    [
      [
        'https://codecov.io/upload/v4?foo=1&bar=2',
        {
          headers: {
            'Content-Type': 'text/plain',
            Accept: 'text/plain'
          },
          body: ''
        }
      ]
    ],
    'should send POST request'
  )

  t.deepEqual(
    getSpyCalls(putSpy),
    [
      [
        'putURL',
        {
          headers: {
            'Content-Type': 'text/plain',
            'x-amz-acl': 'public-read'
          },
          body: 'data'
        }
      ]
    ],
    'should send PUT request'
  )

  t.deepEqual(
    result,
    {
      reportURL: 'reportURL',
      config: {
        foo: '1',
        bar: '2'
      }
    },
    'should return result object'
  )

  unmock('../src/index')
})
