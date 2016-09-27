import test from 'tape';
import * as circle from '../../lib/services/circle';

test('services/circle', (t) => {
    t.plan(2);

    t.true(
        circle.detect({ CIRCLECI: true }),
        'must be detectable'
    );

    t.deepEqual(
        circle.config({
            CIRCLE_SHA1: 'commit',
            CIRCLE_BRANCH: 'branch',
            CIRCLE_PR_NUMBER: 'pr',
            CIRCLE_BUILD_NUM: 'bui',
            CIRCLE_NODE_INDEX: 'ld',
            CIRCLE_PROJECT_USERNAME: 'sl',
            CIRCLE_PROJECT_REPONAME: 'ug'
        }),
        {
            service: 'circleci',
            commit: 'commit',
            branch: 'branch',
            pr: 'pr',
            build: 'bui.ld',
            slug: 'sl/ug'
        },
        'must return a proper config'
    );
});
