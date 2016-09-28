import { exec } from 'child_process';
import makethen from 'makethen';

const execPromise = makethen(exec);

export default () => {
    return execPromise('git rev-parse HEAD').then(([ stdout ]) => stdout.trim());
};
