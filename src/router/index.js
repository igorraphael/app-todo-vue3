import Vue from 'vue';
import VueRouter from 'vue-router';
import started from '../components/started';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'started',
        component: started,
    },
    {
        path: '/app',
        name: 'app',
        component: () => import('../app'),
    },
];

const router = new VueRouter({ mode: 'history', routes });

export default router;
