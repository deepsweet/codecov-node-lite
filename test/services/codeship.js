import test from 'tape';
import * as codeship from '../../lib/services/codeship';

test('services/codeship', (t) => {
    t.plan(2);

    t.true(
        codeship.detect({ CI_NAME: 'codeship' }),
        'must be detectable'
    );

    t.deepEqual(
        codeship.config({
            CI_COMMIT_ID: 'commit',
            CI_BRANCH: 'branch',
            CI_BUILD_NUMBER: 'build',
            CI_BUILD_URL: 'build_url'
        }),
        {
            service: 'codeship',
            commit: 'commit',
            branch: 'branch',
            build: 'build',
            build_url: 'build_url'
        },
        'must return a proper config'
    );
});
