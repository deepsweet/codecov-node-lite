// https://confluence.jetbrains.com/display/TCD8/Predefined+Build+Parameters

export const detect = (env) => Boolean(env.TEAMCITY_VERSION);

export const config = (env) => ({
    service: 'teamcity',
    commit: env.BUILD_VCS_NUMBER,
    build: env.BUILD_NUMBER
});
