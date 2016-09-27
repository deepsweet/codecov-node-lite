// http://devcenter.bitrise.io/docs/available-environment-variables

import getLastCommitSHA from '../getLastCommitSHA';

export const detect = (env) => Boolean(env.BITRISE_IO);

export const config = (env) => {
    const baseConfig = {
        service: 'bitrise',
        branch: env.BITRISE_GIT_BRANCH,
        pr: env.BITRISE_PULL_REQUEST,
        build: env.BITRISE_BUILD_NUMBER,
        build_url: env.BITRISE_BUILD_URL
    };

    if (Boolean(env.BITRISE_GIT_COMMIT)) {
        return {
            ...baseConfig,
            commit: env.BITRISE_GIT_COMMIT
        };
    }

    return getLastCommitSHA().then((commit) => ({
        ...baseConfig,
        commit
    }));
};
