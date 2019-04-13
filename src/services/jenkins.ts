import { TEnv, TConfig } from '../types'
import getLastGitRev from '../getLastGitRev'

// https://wiki.jenkins-ci.org/display/JENKINS/Building+a+software+project#Buildingasoftwareproject-JenkinsSetEnvironmentVariables
export default async (env: TEnv): Promise<TConfig> => {
  if (!env.JENKINS_URL) {
    return null
  }

  return {
    service: 'jenkins',
    commit: env.ghprbActualCommit || env.GIT_COMMIT || await getLastGitRev(),
    branch: env.ghprbSourceBranch || env.GIT_BRANCH || env.BRANCH_NAME,
    build: env.BUILD_NUMBER,
    build_url: env.BUILD_URL,
    root: env.WORKSPACE,
    pr: env.ghprbPullId || env.CHANGE_ID
  }
}
