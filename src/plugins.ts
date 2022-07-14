import Vue from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {BootstrapVue} from "bootstrap-vue"
import ElementUI from 'element-ui';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue)
Vue.use(ElementUI);

export default Plugin;
