import test from 'tape';
import * as gitlab from '../../lib/services/gitlab';

test('services/gitlab', (t) => {
    t.plan(2);

    t.true(
        gitlab.detect({ CI_SERVER_NAME: 'GitLab CI' }),
        'must be detectable'
    );

    t.deepEqual(
        gitlab.config({
            CI_BUILD_REF: 'commit',
            CI_BUILD_REF_NAME: 'branch',
            CI_BUILD_ID: 'build',
            CI_BUILD_REPO: 'https://gitlab.com/foo/bar.git'
        }),
        {
            service: 'gitlab',
            commit: 'commit',
            branch: 'branch',
            build: 'build',
            slug: 'foo/bar'
        },
        'must return a proper config'
    );
});
