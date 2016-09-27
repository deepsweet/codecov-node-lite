import getLastCommitSHA from '../getLastCommitSHA';

// http://docs.drone.io/env.html

export const detect = (env) => Boolean(env.DRONE);

export const config = (env) => getLastCommitSHA().then((commit) => ({
    service: 'drone.io',
    commit,
    branch: env.DRONE_BRANCH,
    build: env.DRONE_BUILD_NUMBER,
    build_url: env.DRONE_BUILD_URL
}));
