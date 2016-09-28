import test from 'tape';
import getLastGitRev from '../../lib/getLastGitRev';

test('getLastGitRev', (t) => {
    t.plan(3);

    t.equal(
        typeof getLastGitRev,
        'function',
        'must be a function'
    );

    getLastGitRev().then((rev) => {
        t.equal(
            typeof rev,
            'string',
            'must return SHA string'
        );

        t.equal(
            rev.length,
            40,
            'SHA string length must be 40'
        );
    });
});
