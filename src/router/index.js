/* eslint-disable import/no-dynamic-require */
import Vue from 'vue';
import Router from 'vue-router';
import { MENU } from '../util/Constant';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: MENU.tradeRegistration,
        },
        {
            path: MENU.tradeRegistration,
            name: 'tradeRegistration',
            component: resolve => require(['../components/TradeRegistration'], resolve), // eslint-disable-line global-require
        },
        {
            path: MENU.tradeLeasing,
            name: 'tradeLeasing',
            component: resolve => require(['../components/TradeLeasing'], resolve), // eslint-disable-line global-require
        },
        {
            path: MENU.tradeUpload,
            name: 'tradeUpload',
            component: resolve => require(['../components/TradeUpload'], resolve), // eslint-disable-line global-require
        },
        {
            path: MENU.tradeChange,
            name: 'tradeChange',
            component: resolve => require(['../components/TradeChange'], resolve), // eslint-disable-line global-require
        },
        {
            path: MENU.tradeInformation,
            name: 'tradeInformation',
            component: resolve => require(['../components/TradeInformation'], resolve), // eslint-disable-line global-require
        },
        {
            path: MENU.aboutUs,
            name: 'aboutUs',
            component: resolve => require(['../components/AboutUs'], resolve), // eslint-disable-line global-require
        },
    ],
});
