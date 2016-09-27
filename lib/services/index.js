import * as appveyor from './appveyor';
import * as bitrise from './bitrise';
import * as buildkite from './buildkite';
import * as circle from './circle';
import * as codeship from './codeship';
import * as drone from './drone';
import * as gitlab from './gitlab';
import * as jenkins from './jenkins';
import * as magnum from './magnum';
import * as semaphore from './semaphore';
import * as shippable from './shippable';
import * as snap from './snap';
import * as teamcity from './teamcity';
import * as travis from './travis';
import * as wercker from './wercker';

export default [
    appveyor,
    bitrise,
    buildkite,
    circle,
    codeship,
    drone,
    gitlab,
    jenkins,
    magnum,
    semaphore,
    shippable,
    snap,
    teamcity,
    travis,
    wercker
];
