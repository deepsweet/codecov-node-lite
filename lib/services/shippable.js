// http://docs.shippable.com/ci/advancedOptions/environmentVariables/

export const detect = (env) => Boolean(env.SHIPPABLE);

export const config = (env) => ({
    service: 'shippable',
    commit: env.COMMIT,
    branch: env.BRANCH,
    pr: env.PULL_REQUEST,
    build: env.BUILD_NUMBER,
    build_url: env.BUILD_URL,
    slug: env.REPO_NAME
});
