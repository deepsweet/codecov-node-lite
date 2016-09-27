#!/usr/bin/env node

import codecov from './';

process.stdin.resume();
process.stdin.setEncoding('utf8');

let data = '';

process.stdin.on('data', (chunk) => {
    data += chunk;
});

/* eslint-disable no-console, no-process-exit, promise/always-return */
process.stdin.on('end', () => {
    codecov(data)
        .then((result) => {
            console.log(`service: ${result.config.service}`);
            console.log(`report: ${result.reportURL}`);
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
});
/* eslint-enable no-console, no-process-exit, promise/always-return */
