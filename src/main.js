import Vue from 'vue';
import Buefy from 'buefy';
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import {
    faCheck,
    faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp,
    faAngleRight,
    faAngleLeft,
    faAngleDown,
    faEye,
    faEyeSlash,
    faCaretDown,
    faCaretUp,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'buefy/dist/buefy.css';
import App from './components';

Vue.config.productionTip = false;
library.add(
    faUser,
    faCheck,
    faCheckCircle,
    faInfoCircle,
    faExclamationTriangle,
    faExclamationCircle,
    faArrowUp,
    faAngleRight,
    faAngleLeft,
    faAngleDown,
    faEye,
    faEyeSlash,
    faCaretDown,
    faCaretUp,
    faUpload
);

Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
});

new Vue({
    render: (h) => h(App),
}).$mount('#app');
