// https://semaphoreci.com/docs/available-environment-variables.html

export const detect = (env) => Boolean(env.SEMAPHORE);

export const config = (env) => ({
    service: 'semaphore',
    commit: env.REVISION,
    branch: env.BRANCH_NAME,
    pr: env.PULL_REQUEST_NUMBER,
    build: `${env.SEMAPHORE_BUILD_NUMBER}.${env.SEMAPHORE_CURRENT_THREAD}`,
    slug: env.SEMAPHORE_REPO_SLUG
});
