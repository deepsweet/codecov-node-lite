// https://wiki.jenkins-ci.org/display/JENKINS/Building+a+software+project#Buildingasoftwareproject-JenkinsSetEnvironmentVariables

export const detect = (env) => Boolean(env.JENKINS_URL);

export const config = (env) => ({
    service: 'jenkins',
    commit: env.ghprbActualCommit || env.GIT_COMMIT,
    branch: env.ghprbSourceBranch || env.GIT_BRANCH,
    pr: env.ghprbPullId,
    build: env.BUILD_NUMBER,
    build_url: env.BUILD_URL
});
