import querystring from 'querystring';
import makethen from 'makethen';
import request from 'request';
import getCurrentConfig from './getCurrentConfig';

const endpoint = 'https://codecov.io/upload/v3';
const postPromise = makethen(request.post);
const putPromise = makethen(request.put);
const postRequest = (url) => {
    return postPromise(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
            Accept: 'text/plain'
        },
        body: ''
    }).then((result) => result[1]);
};
const putRequest = (url, data) => {
    return putPromise(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'plain/text',
            'x-amz-acl': 'public-read'
        },
        body: data
    }).then((result) => result[1]);
};

export default (data) => {
    return getCurrentConfig(process.env).then((config) => {
        const queryString = querystring.stringify(config);
        const postURL = `${endpoint}?${queryString}`;

        return postRequest(postURL)
            .then((response) => response.split('\n'))
            .then(([ reportURL, putURL ]) => {
                return putRequest(putURL, data).then(() => {
                    return {
                        reportURL,
                        config
                    };
                });
            });
    });
};
