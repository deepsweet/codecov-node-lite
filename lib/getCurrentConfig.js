import find from 'array-find';
import pkg from '../package.json';
import services from './services/';

export default (env) => {
    const currentService = find(services, (service) => {
        return service.detect(env);
    });

    if (!currentService) {
        return Promise.reject('No CI service was found');
    }

    const serviceConfig = currentService.config(env);
    const config = {
        ...serviceConfig,
        package: `node-${pkg.name}-${pkg.version}`,
        token: env.CODECOV_TOKEN || null
    };

    return Promise.resolve(config);
};
