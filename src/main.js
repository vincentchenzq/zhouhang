// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import App from './App';
import router from './router';
import store from './store/index';
// eslint-disable-next-line
import 'iview/dist/styles/iview.css';
import './assets/styles/common.less';

Vue.config.productionTip = false;

require('./mock');

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
