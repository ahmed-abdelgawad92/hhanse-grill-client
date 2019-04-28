import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Karte from './components/karte/karte.vue';
import WeekPlan from './components/mittags-tisch/WeekPlan.vue';

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
   {
      path: '/week-plan',
      component: WeekPlan
   },
];

export default new VueRouter({ routes, mode: 'history' });