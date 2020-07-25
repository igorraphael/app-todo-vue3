import Vue from 'vue';
import Buefy from 'buefy';
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import {
    faThumbtack,
    faBan,
    faEdit,
    faClipboardCheck,
    faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'buefy/dist/buefy.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
library.add(faThumbtack, faBan, faEdit, faClipboardCheck, faPlusCircle);

Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
