import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../components/home.jsx';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
    },
    {
        path: '/app',
        name: 'app',
        component: () => import('../components/app'),
    },
    // {
    //     path: '/tarefa',
    //     name: 'tarefa',
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../components/tarefa'),
    // },
];

const router = new VueRouter({ mode: 'history', routes });

export default router;
