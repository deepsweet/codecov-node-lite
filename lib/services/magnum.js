// https://magnum-ci.com/docs/environment

export const detect = (env) => Boolean(env.MAGNUM);

export const config = (env) => ({
    service: 'magnum',
    commit: env.CI_COMMIT,
    branch: env.CI_BRANCH,
    build: env.CI_BUILD_NUMBER
});
