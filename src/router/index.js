import { createRouter, createWebHashHistory } from 'vue-router';
import MainPageVue from '../components/MainPage.vue';
import NotFoundPage from '../components/NotFoundPage.vue';
import WorkerComponent from '../components/WorkerComponent.vue';


const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPageVue
  },
  {
    path: '/worker',
    name: 'WorkerComponent',
    component: WorkerComponent,
    props: true
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFoundPage',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
