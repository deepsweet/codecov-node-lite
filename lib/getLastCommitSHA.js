import execa from 'execa';

export default () => {
    return execa('git', [ 'rev-parse', 'HEAD' ]).then((result) => result.stdout);
};
