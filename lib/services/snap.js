// https://docs.snap-ci.com/environment-variables/

export const detect = (env) => Boolean(env.SNAP_CI);

export const config = (env) => ({
    service: 'snap',
    commit: env.SNAP_COMMIT || env.SNAP_UPSTREAM_COMMIT,
    branch: env.SNAP_BRANCH || env.SNAP_UPSTREAM_BRANCH,
    pr: env.SNAP_PULL_REQUEST_NUMBER,
    job: env.SNAP_STAGE_NAME,
    build: env.SNAP_PIPELINE_COUNTER
});
