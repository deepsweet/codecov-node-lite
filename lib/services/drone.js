import getLastGitRev from '../getLastGitRev';

// http://docs.drone.io/env.html

export const detect = (env) => Boolean(env.DRONE);

export const config = (env) => getLastGitRev().then((rev) => ({
    service: 'drone.io',
    commit: rev,
    branch: env.DRONE_BRANCH,
    build: env.DRONE_BUILD_NUMBER,
    build_url: env.DRONE_BUILD_URL
}));
