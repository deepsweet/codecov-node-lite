import test from 'blue-tape'
import getCurrentConfig from '../src/getCurrentConfig'

test('getCurrentConfig', async (t) => {
  try {
    await getCurrentConfig({})
    t.fail('should not get here')
  } catch (error) {
    t.equal(
      error.message,
      'No CI service was found',
      'must fail if no CI service was found'
    )
  }

  const config = await getCurrentConfig({ WERCKER_MAIN_PIPELINE_STARTED: '1' })

  t.equal(
    config.service,
    'wercker',
    'must be resolved with config if CI service was found'
  )
})
