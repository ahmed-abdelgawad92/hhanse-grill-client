import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Karte from './components/karte/karte.vue';
import WeekPlan from './components/mittags-tisch/WeekPlan.vue';
import MittagsTisch from './components/mittags-tisch/MittagsTisch.vue';

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
   {
      path: '/mittagstisch',
      component: MittagsTisch
   },
];

export default new VueRouter({ routes, mode: 'history' });