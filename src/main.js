import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import SearchTrip from './components/SearchTrip.vue';
import AddTrip from './components/AddTrip.vue';
import ListOfTrips from './components/ListOfTrips.vue';
import ShortTrip from './components/ShortTrip.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/searchTrip',
      component: SearchTrip
    },
    {
      path: '/addTrip',
      component: AddTrip
    },
    {
      path: '/listOfTrips',
      component: ListOfTrips
    },
    {
      path: '/',
      component: ShortTrip
    }
  ]

});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
