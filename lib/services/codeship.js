// https://documentation.codeship.com/continuous-integration/set-environment-variables/#default-environment-variables

export const detect = (env) => env.CI_NAME === 'codeship';

export const config = (env) => ({
    service: 'codeship',
    commit: env.CI_COMMIT_ID,
    branch: env.CI_BRANCH,
    build: env.CI_BUILD_NUMBER,
    build_url: env.CI_BUILD_URL
});
