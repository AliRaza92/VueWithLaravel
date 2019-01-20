
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const example = require('./components/Example.vue');
const students = require('./components/StudentComponent.vue');
const countries = require('./components/CountryComponent.vue');
const sample = require('./components/VuetifySample.vue');

const favourites = require('./components/ListFavourtiesComponent.vue');

const routes = [
    {
        path: '/',
        component:students
    },
    {
        path: '/example',
        component: example
    },
    {
        path: '/country',
        component: countries
    },
    {
        path: '/favourites',
        component: favourites
    },
    {
        path: '/sample',
        component: sample
    }
];

const router  = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    router
});
