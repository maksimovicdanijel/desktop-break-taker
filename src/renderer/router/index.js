import Vue from 'vue';
import Router from 'vue-router';

import CounterPage from '@/pages/CounterPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: CounterPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
