import test from 'tape';
import * as jenkins from '../../lib/services/jenkins';

test('services/jenkins', (t) => {
    t.plan(3);

    t.true(
        jenkins.detect({ JENKINS_URL: true }),
        'must be detectable'
    );

    t.deepEqual(
        jenkins.config({
            ghprbActualCommit: 'commit',
            ghprbSourceBranch: 'branch',
            ghprbPullId: 'pr',
            BUILD_NUMBER: 'build',
            BUILD_URL: 'build_url'
        }),
        {
            service: 'jenkins',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            build: 'build',
            build_url: 'build_url'
        },
        'must return a proper config'
    );

    t.deepEqual(
        jenkins.config({
            GIT_COMMIT: 'commit',
            GIT_BRANCH: 'branch',
            ghprbPullId: 'pr',
            BUILD_NUMBER: 'build',
            BUILD_URL: 'build_url'
        }),
        {
            service: 'jenkins',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            build: 'build',
            build_url: 'build_url'
        },
        'must return a proper config with alt env'
    );
});
