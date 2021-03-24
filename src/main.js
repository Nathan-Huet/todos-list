import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import store from './store'

createApp(App).use(store).use(router).mount('#app')



if(store.getters["account/isLoggedIn"]){
    axios.interceptors.request.use(function (config) {
      const token = store.getters["account/getToken"];
      config.headers.Authorization ="Bearer " + token;
      return config;
  });
  }