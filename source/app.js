// Import Styling //
import 'bootstrap';
// import '@fortawesome/fontawesome-free/js/all';
import './scss/main.scss';

// Import Function //
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
// import "./js/main.js";

// Vue Component //
Vue.use(VueResource);
const bus = new Vue();

new Vue({
    el: '#vue-app',
    render: h => h(App)
});