import test from 'tape';
import * as magnum from '../../lib/services/magnum';

test('services/magnum', (t) => {
    t.plan(2);

    t.true(
        magnum.detect({ MAGNUM: true }),
        'must be detectable'
    );

    t.deepEqual(
        magnum.config({
            CI_COMMIT: 'commit',
            CI_BRANCH: 'branch',
            CI_BUILD_NUMBER: 'build'
        }),
        {
            service: 'magnum',
            commit: 'commit',
            branch: 'branch',
            build: 'build'
        },
        'must return a proper config'
    );
});
