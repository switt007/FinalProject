import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';
import {gpx} from '@tmcw/togeojson';

import SearchTrip from './components/SearchTrip.vue';
import AddTrip from './components/AddTrip.vue';
import ListOfTrips from './components/ListOfTrips.vue';
import ShortTrip from './components/ShortTrip.vue';
import Detail from './components/Detail.vue';
import MapOfTrips from './components/MapOfTrips.vue';
// import './styles/variables.scss';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueCarousel);

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
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
    },
    {
      path: '/detail/:tripID',
      name: 'detail',
      props: true,
      component: Detail
    },
    {
      path: '/mapavyletu',
      name: 'mapoftrips',
      component: MapOfTrips
    }
  ]

});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
