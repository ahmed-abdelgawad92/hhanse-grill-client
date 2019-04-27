import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Karte from './components/karte/karte.vue';

Vue.use(VueRouter);

const routes = [
   {
      path: '',
      component: Home
   },
   {
      path: '/karte',
      component: Karte
   },
];

export default new VueRouter({ routes, mode: 'history' });