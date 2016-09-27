import test from 'tape';
import * as snap from '../../lib/services/snap';

test('services/snap', (t) => {
    t.plan(3);

    t.true(
        snap.detect({ SNAP_CI: true }),
        'must be detectable'
    );

    t.deepEqual(
        snap.config({
            SNAP_COMMIT: 'commit',
            SNAP_BRANCH: 'branch',
            SNAP_PULL_REQUEST_NUMBER: 'pr',
            SNAP_STAGE_NAME: 'job',
            SNAP_PIPELINE_COUNTER: 'build'
        }),
        {
            service: 'snap',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            job: 'job',
            build: 'build'
        },
        'must return a proper config'
    );

    t.deepEqual(
        snap.config({
            SNAP_UPSTREAM_COMMIT: 'commit',
            SNAP_UPSTREAM_BRANCH: 'branch',
            SNAP_PULL_REQUEST_NUMBER: 'pr',
            SNAP_STAGE_NAME: 'job',
            SNAP_PIPELINE_COUNTER: 'build'
        }),
        {
            service: 'snap',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            job: 'job',
            build: 'build'
        },
        'must return a proper config with alt env'
    );
});
