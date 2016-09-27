// https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables

export const detect = (env) => Boolean(env.TRAVIS);

export const config = (env) => ({
    service: 'travis',
    commit: env.TRAVIS_COMMIT,
    branch: env.TRAVIS_BRANCH,
    pr: env.TRAVIS_PULL_REQUEST,
    tag: env.TRAVIS_TAG,
    job: env.TRAVIS_JOB_ID,
    build: env.TRAVIS_JOB_NUMBER,
    slug: env.TRAVIS_REPO_SLUG
});
