import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueResource from 'vue-resource';
import Gravatar from 'vue-gravatar';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:8000/api';

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.http.interceptors.push((request, next) => {
    if (localStorage.getItem('token')) {
      request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    }
    next()
});

Vue.component('v-gravatar', Gravatar);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
