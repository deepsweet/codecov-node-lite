// https://buildkite.com/docs/guides/environment-variables

export const detect = (env) => Boolean(env.BUILDKITE);

export const config = (env) => ({
    service: 'buildkite',
    commit: env.BUILDKITE_COMMIT,
    branch: env.BUILDKITE_BRANCH,
    build: `${env.BUILDKITE_BUILD_NUMBER}.${env.BUILDKITE_JOB_ID}`,
    build_url: env.BUILDKITE_BUILD_URL,
    slug: env.BUILDKITE_PROJECT_SLUG
});
