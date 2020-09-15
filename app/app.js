import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import { createRouter } from './router';
import { createStore } from './src/store';

import App from './App.vue';

export function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    metaInfo() {
      return {
        title: 'Index Page',
      }
    },
    router,
    store,
    render: h => h(App),
  });

  return { app, router, store };
}
