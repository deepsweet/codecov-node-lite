import test from 'tape';
import * as wercker from '../../lib/services/wercker';

test('services/wercker', (t) => {
    t.plan(2);

    t.true(
        wercker.detect({ WERCKER_MAIN_PIPELINE_STARTED: true }),
        'must be detectable'
    );

    t.deepEqual(
        wercker.config({
            WERCKER_GIT_COMMIT: 'commit',
            WERCKER_GIT_BRANCH: 'branch',
            WERCKER_MAIN_PIPELINE_STARTED: 'build',
            WERCKER_BUILD_URL: 'build_url',
            WERCKER_GIT_OWNER: 'sl',
            WERCKER_GIT_REPOSITORY: 'ug'
        }),
        {
            service: 'wercker',
            commit: 'commit',
            branch: 'branch',
            build: 'build',
            build_url: 'build_url',
            slug: 'sl/ug'
        },
        'must return a proper config'
    );
});
