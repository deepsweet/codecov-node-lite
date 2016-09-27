import test from 'tape';
import * as buildkite from '../../lib/services/buildkite';

test('services/buildkite', (t) => {
    t.plan(2);

    t.true(
        buildkite.detect({ BUILDKITE: true }),
        'must be detectable'
    );

    t.deepEqual(
        buildkite.config({
            BUILDKITE_COMMIT: 'commit',
            BUILDKITE_BRANCH: 'branch',
            BUILDKITE_BUILD_NUMBER: 'bui',
            BUILDKITE_JOB_ID: 'ld',
            BUILDKITE_BUILD_URL: 'build_url',
            BUILDKITE_PROJECT_SLUG: 'slug'
        }),
        {
            service: 'buildkite',
            commit: 'commit',
            branch: 'branch',
            build: 'bui.ld',
            build_url: 'build_url',
            slug: 'slug'
        },
        'must return a proper config'
    );
});
