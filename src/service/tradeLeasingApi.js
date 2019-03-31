import fetch from '../util/fetch';

function getImage(data) {
    return fetch({
        url: '/trade/mark/page',
        method: 'POST',
        data: data || {}
    });
}

export { getImage };
