import axios from 'axios';
import { Spin } from 'iview';
import store from '../store';

let fetch = axios.create({
    baseURL: '/backend',
    timeout: 20000 // 超时时间
});

// http request 请求拦截器，有token值则配置上token值
fetch.interceptors.request.use(
    config => {
        Spin.show({
            render: h => {
                return h('div', [
                    h('Icon', {
                        class: 'spin-icon-load',
                        props: {
                            type: 'ios-loading',
                            size: 18
                        }
                    }),
                    h('div', 'Please Wait！')
                ]);
            }
        });
        config.headers.Authorization = store.state.user.token;
        return config;
    },
    err => {
        Spin.hide();
        return Promise.reject(err);
    }
);

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
fetch.interceptors.response.use(
    response => {
        Spin.hide();
        if (response.status === 200 && response.data.retCode === 10000000) {
            return response.data.data;
        }
        return Promise.reject(response);
    },
    error => {
        Spin.hide();
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error.response.data);
    }
);

export default fetch;
