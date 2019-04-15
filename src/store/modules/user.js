import { loginService } from '../../service/userApi';

export const user = {
    state: {
        token: ''
    },
    getters: {
        GET_TOKEN(state) {
            return state.token;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        }
    },
    actions: {
        LOGIN({ commit }, data) {
            return new Promise((resolve, reject) => {
                loginService(data)
                    .then(data => {
                        console.log(data);
                        commit('SET_TOKEN', data.token);
                        resolve('登录成功！');
                    })
                    .catch(() => {
                        reject('用户名或者密码错误');
                    });
            });
        }
    }
};
