import test from 'tape';
import * as travis from '../../lib/services/travis';

test('services/travis', (t) => {
    t.plan(2);

    t.true(
        travis.detect({ TRAVIS: true }),
        'must be detectable'
    );

    t.deepEqual(
        travis.config({
            TRAVIS_COMMIT: 'commit',
            TRAVIS_BRANCH: 'branch',
            TRAVIS_PULL_REQUEST: 'pr',
            TRAVIS_TAG: 'tag',
            TRAVIS_JOB_ID: 'job',
            TRAVIS_JOB_NUMBER: 'build',
            TRAVIS_REPO_SLUG: 'slug'
        }),
        {
            service: 'travis',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            tag: 'tag',
            job: 'job',
            build: 'build',
            slug: 'slug'
        },
        'must return a proper config'
    );
});
