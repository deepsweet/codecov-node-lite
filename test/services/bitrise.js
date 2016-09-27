import test from 'tape';
import * as bitrise from '../../lib/services/bitrise';

test('services/bitrise', (t) => {
    t.plan(4);

    t.true(
        bitrise.detect({ BITRISE_IO: true }),
        'must be detectable'
    );

    t.deepEqual(
        bitrise.config({
            BITRISE_GIT_COMMIT: 'commit',
            BITRISE_GIT_BRANCH: 'branch',
            BITRISE_PULL_REQUEST: 'pr',
            BITRISE_BUILD_NUMBER: 'build',
            BITRISE_BUILD_URL: 'build_url'
        }),
        {
            service: 'bitrise',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            build: 'build',
            build_url: 'build_url'
        },
        'must return a proper config'
    );

    bitrise.config({
        BITRISE_GIT_BRANCH: 'branch',
        BITRISE_PULL_REQUEST: 'pr',
        BITRISE_BUILD_NUMBER: 'build',
        BITRISE_BUILD_URL: 'build_url'
    }).then((config) => {
        t.deepEqual(
            config,
            {
                service: 'bitrise',
                commit: config.commit,
                branch: 'branch',
                pr: 'pr',
                build: 'build',
                build_url: 'build_url'
            },
            'must return a proper config with alt env'
        );

        t.equal(
            typeof config.commit,
            'string',
            'must return a proper commit SHA with alt env in async way'
        );
    });
});
