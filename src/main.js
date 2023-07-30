import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import firebaseConfig from './firebase/firebaseConfig';
import { createApp } from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  
  store,
  render: (h) => h(App),
}).$mount('#app');



createApp(App).use(router).mount('#app');
