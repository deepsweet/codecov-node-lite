import test from 'tape';

import codecov from '../../lib/index';

test('codecov', (t) => {
    t.plan(1);

    t.equal(
        typeof codecov,
        'function',
        'must be a function'
    );
});
