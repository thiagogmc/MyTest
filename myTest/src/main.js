import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:8000/api';

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
