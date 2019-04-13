import getLastGitRev from '../getLastGitRev'
import { TEnv, TConfig } from '../types'

// http://docs.drone.io/env.html
export default async (env: TEnv): Promise<TConfig> => {
  if (!env.DRONE) {
    return null
  }

  return {
    service: 'drone.io',
    build: env.DRONE_BUILD_NUMBER,
    commit: await getLastGitRev(),
    build_url: env.DRONE_BUILD_URL,
    branch: env.DRONE_BRANCH,
    root: env.DRONE_BUILD_DIR
  }
}
