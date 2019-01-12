/* eslint-disable import/first */
import vue from 'vue';
import vuex from 'vuex';
import state from './state';
import * as getters from './getters';
import mutations from './mutations';
import actions from './actions';
import createLogger from 'vuex/dist/logger'; // 修改日志

vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production'; // 开发环境中为true，否则为false

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
  plugins: debug ? [createLogger()] : [], // 开发环境下显示vuex的状态修改
});
