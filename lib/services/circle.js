// https://circleci.com/docs/environment-variables/

export const detect = (env) => Boolean(env.CIRCLECI);

export const config = (env) => ({
    service: 'circleci',
    commit: env.CIRCLE_SHA1,
    branch: env.CIRCLE_BRANCH,
    pr: env.CIRCLE_PR_NUMBER,
    build: `${env.CIRCLE_BUILD_NUM}.${env.CIRCLE_NODE_INDEX}`,
    slug: `${env.CIRCLE_PROJECT_USERNAME}/${env.CIRCLE_PROJECT_REPONAME}`
});
