import services from './services'
import { TEnv, TConfig } from './types'

type TResult = TConfig & {
  package: string,
  token: string | undefined
}

export default async (env: TEnv): Promise<TResult> => {
  let config = null

  for (const service of services) {
    const result = await service(env)

    if (result !== null) {
      config = result
      break
    }
  }

  if (config === null) {
    throw new Error('No CI service was found')
  }

  return {
    ...config,
    package: 'codecov-node-lite',
    token: env.CODECOV_TOKEN
  }
}
