// http://devcenter.wercker.com/docs/environment-variables/available-env-vars.html

export const detect = (env) => Boolean(env.WERCKER_MAIN_PIPELINE_STARTED);

export const config = (env) => ({
    service: 'wercker',
    commit: env.WERCKER_GIT_COMMIT,
    branch: env.WERCKER_GIT_BRANCH,
    build: env.WERCKER_MAIN_PIPELINE_STARTED,
    build_url: env.WERCKER_BUILD_URL,
    slug: `${env.WERCKER_GIT_OWNER}/${env.WERCKER_GIT_REPOSITORY}`
});
