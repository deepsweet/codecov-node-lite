import querystring from 'querystring';
import request from 'request-promise-native';
import getCurrentConfig from './getCurrentConfig';

const endpoint = 'https://codecov.io/upload/v3';
const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain',
        Accept: 'text/plain'
    },
    body: ''
};
const putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'plain/text',
        'x-amz-acl': 'public-read'
    }
};

export default (data) => {
    return getCurrentConfig(process.env).then((config) => {
        const queryString = querystring.stringify(config);
        const postURL = `${endpoint}?${queryString}`;

        return request.post(postURL, postOptions)
            .then((response) => response.split('\n'))
            .then(([ reportURL, putURL ]) => {
                return request.put(putURL, { ...putOptions, body: data }).then(() => {
                    return {
                        reportURL,
                        config
                    };
                });
            });
    });
};
