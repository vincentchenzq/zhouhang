import fetch from '../util/fetch';
export function imageUpload(data) {
    return fetch({
        url: '/image/upload',
        method: 'POST',
        'Content-Type': 'multipart/form-data',
        data: data || {}
    });
}
