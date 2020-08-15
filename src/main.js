import Vue from 'vue';
import Buefy from 'buefy';
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import {
    faClock,
    faBan,
    faEdit,
    faClipboardCheck,
    faPlusCircle,
    faExclamationCircle,
    faSave,
    faTrashAlt,
    faFrown,
    faQuestionCircle,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'buefy/dist/buefy.css';
import Home from './Home';
import router from './router';

Vue.config.productionTip = false;
library.add(
    faClock,
    faBan,
    faEdit,
    faClipboardCheck,
    faPlusCircle,
    faExclamationCircle,
    faSave,
    faTrashAlt,
    faFrown,
    faQuestionCircle,
    faSpinner
);

Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
});

new Vue({
    router,
    render: (h) => h(Home),
}).$mount('#app');
