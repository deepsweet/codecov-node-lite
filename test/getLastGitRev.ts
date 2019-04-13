import test from 'blue-tape'
import getLastGitRev from '../src/getLastGitRev'

test('getLastGitRev', async (t) => {
  const result = await getLastGitRev()

  t.equal(
    typeof result,
    'string',
    'must return SHA string'
  )

  t.equal(
    result.length,
    40,
    'SHA string length must be 40'
  )
})
