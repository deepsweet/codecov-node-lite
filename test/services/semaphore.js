import test from 'tape';
import * as semaphore from '../../lib/services/semaphore';

test('services/semaphore', (t) => {
    t.plan(2);

    t.true(
        semaphore.detect({ SEMAPHORE: true }),
        'must be detectable'
    );

    t.deepEqual(
        semaphore.config({
            REVISION: 'commit',
            BRANCH_NAME: 'branch',
            PULL_REQUEST_NUMBER: 'pr',
            SEMAPHORE_BUILD_NUMBER: 'bui',
            SEMAPHORE_CURRENT_THREAD: 'ld',
            SEMAPHORE_REPO_SLUG: 'slug'
        }),
        {
            service: 'semaphore',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            build: 'bui.ld',
            slug: 'slug'
        },
        'must return a proper config'
    );
});
