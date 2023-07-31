import App from './App.vue';
import router from './router/index';
import firebaseConfig from './firebase/firebaseConfig';
import { createApp } from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);





createApp(App).use(router).mount('#app');
