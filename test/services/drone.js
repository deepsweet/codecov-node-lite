import test from 'tape';
import * as drone from '../../lib/services/drone';

test('services/drone', (t) => {
    t.plan(3);

    t.true(
        drone.detect({ DRONE: true }),
        'must be detectable'
    );

    drone.config({
        DRONE_BRANCH: 'branch',
        DRONE_BUILD_NUMBER: 'build',
        DRONE_BUILD_URL: 'build_url'
    }).then((config) => {
        t.deepEqual(
            config,
            {
                service: 'drone.io',
                commit: config.commit,
                branch: 'branch',
                build: 'build',
                build_url: 'build_url'
            },
            'must return a proper config'
        );

        t.equal(
            typeof config.commit,
            'string',
            'must return a proper commit SHA in async way'
        );
    });
});
