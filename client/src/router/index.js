import Vue from 'vue';
import Router from 'vue-router';
import TableQuestion from '@/components/TableQuestion';
import DetailQuestion from '@/components/DetailQuestion';
import MyQuestion from '@/components/MyQuestion';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TableQuestion',
      component: TableQuestion,
    },
    {
      path: '/:id',
      name: 'DetailQuestion',
      component: DetailQuestion,
      props: true,
    },
    {
      path: '/question/user',
      name: 'MyQuestion',
      component: MyQuestion,
    },
  ],
});
