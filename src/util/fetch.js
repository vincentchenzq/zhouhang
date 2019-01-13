import axios from 'axios';

const defaultConfig = {
    timeout: 5000, // 超时时间
};


axios.defaults = defaultConfig;

// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(config => config,
    err => Promise.reject(err));

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
axios.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        }
        return Promise.reject(response);
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error.response.data);
    });

export default axios;
