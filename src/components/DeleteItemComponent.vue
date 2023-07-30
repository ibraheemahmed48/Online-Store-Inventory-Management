<template>
  <div class="delete-item">
    <h2>Delete Item</h2>
    <p>Are you sure you want to delete "{{ item ? item.name : '' }}"?</p>

    <!-- Delete button -->
    <button @click="deleteItem" class="delete-btn">Delete</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: null,
    };
  },
  created() {
    // Fetch the item details using this.$route.params.id
    const itemId = this.$route.params.id;
    this.item = this.$store.state.items.find(item => item.id === itemId);
  },
  methods: {
    deleteItem() {
      if (this.item) {
        // Dispatch the 'deleteItem' action to delete the item from the store
        this.$store.dispatch('deleteItem', this.item.id);
      }

      // Redirect to the item list after deleting the item
      this.$router.push('/');
    },
  },
};
</script>

<style>
.delete-item {
  margin: 20px;
}

h2 {
  margin-bottom: 20px;
}

.delete-btn {
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c82333;
}
</style>
