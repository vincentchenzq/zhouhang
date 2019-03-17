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
                loginService(data).then(data => {
                    commit('SET_TOKEN', data.token);
                });
            });
        }
    }
};
