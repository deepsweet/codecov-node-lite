import test from 'tape';
import getCurrentConfig from '../../lib/getCurrentConfig';

test('getCurrentConfig', (t) => {
    t.plan(3);

    t.equal(
        typeof getCurrentConfig,
        'function',
        'must be a function'
    );

    getCurrentConfig({}).catch((error) => {
        t.equal(
            error,
            'No CI service was found',
            'must fail if no CI service was found'
        );
    });

    getCurrentConfig({ WERCKER_MAIN_PIPELINE_STARTED: true }).then((config) => {
        t.equal(
            config.service,
            'wercker',
            'must be resolved with config if CI service was found'
        );
    });
});
