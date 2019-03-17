/* eslint-disable import/no-dynamic-require */
import Vue from 'vue';
import Router from 'vue-router';
import { MENU } from '../util/Constant';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: MENU.tradeRegistration
        },
        {
            path: MENU.tradeRegistration,
            name: 'tradeRegistration',
            component: () => import('../components/TradeRegistration')
        },
        {
            path: MENU.tradeLeasing,
            name: 'tradeLeasing',
            component: () => import('../components/TradeLeasing')
        },
        {
            path: MENU.tradeUpload,
            name: 'tradeUpload',
            component: () => import('../components/TradeUpload')
        },
        {
            path: MENU.tradeChange,
            name: 'tradeChange',
            component: () => import('../components/TradeChange')
        },
        {
            path: MENU.tradeInformation,
            name: 'tradeInformation',
            component: () => import('../components/TradeInformation')
        },
        {
            path: MENU.aboutUs,
            name: 'aboutUs',
            component: () => import('../components/AboutUs')
        }
    ]
});
