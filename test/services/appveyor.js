import test from 'tape';
import * as appveyor from '../../lib/services/appveyor';

test('services/appveyor', (t) => {
    t.plan(2);

    t.true(
        appveyor.detect({ APPVEYOR: true }),
        'must be detectable'
    );

    t.deepEqual(
        appveyor.config({
            APPVEYOR_REPO_COMMIT: 'commit',
            APPVEYOR_REPO_BRANCH: 'branch',
            APPVEYOR_PULL_REQUEST_NUMBER: 'pr',
            APPVEYOR_ACCOUNT_NAME: 'j',
            APPVEYOR_PROJECT_SLUG: 'o',
            APPVEYOR_BUILD_VERSION: 'b',
            APPVEYOR_JOB_ID: 'build',
            APPVEYOR_REPO_NAME: 'slug'
        }),
        {
            service: 'appveyor',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            job: 'j/o/b',
            build: 'build',
            slug: 'slug'
        },
        'must return a proper config'
    );
});
