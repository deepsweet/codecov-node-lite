import test from 'tape';
import getLastCommitSHA from '../../lib/getLastCommitSHA';

test('getLastCommitSHA', (t) => {
    getLastCommitSHA().then((sha) => {
        t.plan(3);

        t.equal(
            typeof getLastCommitSHA,
            'function',
            'must be a function'
        );

        t.equal(
            typeof sha,
            'string',
            'must return SHA string'
        );

        t.equal(
            sha.length,
            40,
            'SHA string length must be 40'
        );
    });
});
