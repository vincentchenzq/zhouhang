// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill';
import Vue from 'vue';
import iView from 'iview';
import App from './App';
import router from './router';
import store from './store/index';
// eslint-disable-next-line
import 'iview/dist/styles/iview.css';
import './assets/styles/common.less';
import './assets/styles/layout.less';

Vue.config.productionTip = false;

// require('./mock');

Vue.use(iView);

Vue.prototype.$Message.config({
    top: 100,
    duration: 3
});

let times = 0;
router.beforeEach((to, from, next) => {
    if (times++ === 0) {
        next('/index');
        return;
    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});

store.dispatch('LOGIN', {
    password: '123456',
    username: 'admin'
});
