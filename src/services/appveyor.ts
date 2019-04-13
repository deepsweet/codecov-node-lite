import { TEnv, TConfig } from '../types'

// https://www.appveyor.com/docs/environment-variables/
export default (env: TEnv): TConfig => {
  if (!env.APPVEYOR) {
    return null
  }

  return {
    service: 'appveyor',
    commit: env.APPVEYOR_REPO_COMMIT,
    branch: env.APPVEYOR_REPO_BRANCH,
    pr: env.APPVEYOR_PULL_REQUEST_NUMBER,
    job: `${env.APPVEYOR_ACCOUNT_NAME}/${env.APPVEYOR_PROJECT_SLUG}/${env.APPVEYOR_BUILD_VERSION}`,
    build: env.APPVEYOR_JOB_ID,
    slug: env.APPVEYOR_REPO_NAME
  }
}
