import Vue from 'vue'
import App from './App.vue'
import VueRouter from './App.vue';


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
