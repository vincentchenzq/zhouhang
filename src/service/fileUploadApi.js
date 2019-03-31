import fetch from '../util/fetch';
export function imageUpload(data) {
    return fetch({
        url: '/image/upload',
        method: 'POST',
        'Content-Type': 'multipart/form-data',
        data: data || {}
    });
}
export function tradeUpload(data) {
    return fetch({
        url: '/trade/mark',
        method: 'POST',
        // 'Content-Type': 'multipart/form-data',
        data: data || {}
    });
}
