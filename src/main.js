import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.hhansegrill-halal.de/api/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

Vue.prototype.$domain = 'https://api.hhansegrill-halal.de/';
// Vue.prototype.$domain = 'http://127.0.0.1:8000/';
Vue.prototype.$http = axios;

Vue.filter('capitalize', value => {
  return value ? value.split(' ').map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(' ') : '';
});
Vue.filter('currency', value => {
  return value ? (1 * value).toLocaleString('de-DE', { style: 'currency', currency: 'Eur' }) : '0,00 €';
});
Vue.filter('articleNum', value => {
  let num = value + '';
  while (num.length < 3) {
    num = '0' + num;
  }
  return num;
});
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
