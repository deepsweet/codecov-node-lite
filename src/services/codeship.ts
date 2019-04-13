import { TEnv, TConfig } from '../types'

// https:// documentation.codeship.com/basic/builds-and-configuration/set-environment-variables/#default-environment-variables
export default (env: TEnv): TConfig => {
  if (env.CI_NAME !== 'codeship') {
    return null
  }

  return {
    service: 'codeship',
    build: env.CI_BUILD_NUMBER,
    build_url: env.CI_BUILD_URL,
    commit: env.CI_COMMIT_ID,
    branch: env.CI_BRANCH
  }
}
