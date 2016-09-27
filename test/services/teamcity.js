import test from 'tape';
import * as teamcity from '../../lib/services/teamcity';

test('services/teamcity', (t) => {
    t.plan(2);

    t.true(
        teamcity.detect({ TEAMCITY_VERSION: true }),
        'must be detectable'
    );

    t.deepEqual(
        teamcity.config({
            BUILD_VCS_NUMBER: 'commit',
            BUILD_NUMBER: 'build'
        }),
        {
            service: 'teamcity',
            commit: 'commit',
            build: 'build'
        },
        'must return a proper config'
    );
});
