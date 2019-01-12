import * as types from './mutation-type';

export default {
  nameAsyn({ commit }, { age, name }) {
    commit(types.SET_AGE, age);
    commit(types.SET_NAME, name);
  },
};
