import { createRouter, createWebHistory } from 'vue-router';
import firebase from 'firebase/app';
import 'firebase/auth';

import ItemListComponent from '../components/ItemListComponent.vue';
import AddItemComponent from '../components/AddItemComponent.vue';
import EditItemComponent from '../components/EditItemComponent.vue';
import DeleteItemComponent from '../components/DeleteItemComponent.vue';
import SignUpComponent from '../components/SignUpComponent.vue';
import SignInComponent from '../components/SignInComponent.vue';
import SignOutComponent from '../components/SignOutComponent.vue';

const routes = [
  { path: '/', component: ItemListComponent },
  { path: '/add', component: AddItemComponent },
  { path: '/edit/:id', component: EditItemComponent, props: true },
  { path: '/delete/:id', component: DeleteItemComponent, props: true },
  { path: '/signup', component: SignUpComponent },
  { path: '/signin', component: SignInComponent },
  { path: '/signout', component: SignOutComponent },
  { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirect to home for any other route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check if the user is authenticated before accessing certain routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next({ path: '/signin', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
