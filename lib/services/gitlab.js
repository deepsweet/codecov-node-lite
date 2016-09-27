// https://docs.gitlab.com/ce/ci/variables/README.html

const getSlug = (buildRepo) => {
    return buildRepo
               .split('/')
               .slice(3, 5)
               .join('/')
               .replace('.git', '');
};

export const detect = (env) => env.CI_SERVER_NAME === 'GitLab CI';

export const config = (env) => ({
    service: 'gitlab',
    commit: env.CI_BUILD_REF,
    branch: env.CI_BUILD_REF_NAME,
    build: env.CI_BUILD_ID,
    slug: getSlug(env.CI_BUILD_REPO)
});
