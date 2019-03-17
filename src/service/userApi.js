import fetch from '../util/fetch';

export function loginService(data) {
    return fetch({
        url: '/user/login',
        method: 'POST',
        data: data || {}
    });
}
