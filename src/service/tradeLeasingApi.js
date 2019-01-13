import fetch from '../util/fetch';

function getImage(params) {
    return fetch({
        url: '/api/img',
        method: 'GET',
        params: params || {},
    });
}

function getImage2(params) {
    return fetch({
        url: '/api/img',
        method: 'GET',
        params: params || {},
    });
}

export {
    getImage,
    getImage2,
};
