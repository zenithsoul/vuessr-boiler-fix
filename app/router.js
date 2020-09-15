import Vue from 'vue';
import Router from 'vue-router';
import VueMeta from 'vue-meta';
import routes from './routes';

Vue.use(Router);
Vue.use(VueMeta);

export function createRouter() {
  return new Router({
    mode: 'history',
    linkActiveClass: "link-ac",
    linkExactActiveClass: "link-ac-ex",
    routes: [
      { path: routes.pages.main, component: () => import(/* webpackChunkName: "page_index" */ './src/page/index.vue') },
    ],
  });
}
