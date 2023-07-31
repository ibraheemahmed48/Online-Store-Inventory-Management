import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    addItem(state, newItem) {
      state.items.push(newItem);
    },
    updateItem(state, editedItem) {
      const index = state.items.findIndex(item => item.id === editedItem.id);
      if (index !== -1) {
        Vue.set(state.items, index, editedItem);
      }
    },
    deleteItem(state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId);
    },
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const snapshot = await firebase.firestore().collection('items').get();
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        commit('setItems', items);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async addItem({ dispatch }, newItem) {
      try {
        await firebase.firestore().collection('items').add(newItem);
        dispatch('fetchItems');
      } catch (error) {
        console.error('Error adding item:', error);
      }
    },
    async editItem({ dispatch }, editedItem) {
      try {
        await firebase.firestore().collection('items').doc(editedItem.id).update(editedItem);
        dispatch('fetchItems');
      } catch (error) {
        console.error('Error updating item:', error);
      }
    },
    async deleteItem({ dispatch }, itemId) {
      try {
        await firebase.firestore().collection('items').doc(itemId).delete();
        dispatch('fetchItems');
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
  },
});

