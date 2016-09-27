import test from 'tape';
import * as shippable from '../../lib/services/shippable';

test('services/shippable', (t) => {
    t.plan(2);

    t.true(
        shippable.detect({ SHIPPABLE: true }),
        'must be detectable'
    );

    t.deepEqual(
        shippable.config({
            COMMIT: 'commit',
            BRANCH: 'branch',
            PULL_REQUEST: 'pr',
            BUILD_NUMBER: 'build',
            BUILD_URL: 'build_url',
            REPO_NAME: 'slug'
        }),
        {
            service: 'shippable',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            build: 'build',
            build_url: 'build_url',
            slug: 'slug'
        },
        'must return a proper config'
    );
});
