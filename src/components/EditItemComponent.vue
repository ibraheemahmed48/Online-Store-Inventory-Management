<template>
  <div class="edit-item">
    <h2>Edit Item</h2>
    <form @submit.prevent="editItem">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="editedItem.name" required />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" v-model="editedItem.price" required />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity:</label>
        <input type="number" v-model="editedItem.quantity" required />
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="url" v-model="editedItem.image" />
      </div>
      <div class="form-group">
        <label for="orderDate">Order Date:</label>
        <input type="date" v-model="editedItem.orderDate" required />
      </div>

      <button type="submit">Save Changes</button>
    </form>
    <div v-if="feedback">
      <p v-if="feedback.success" class="success">Item updated successfully!</p>
      <p v-else class="error">Error: {{ feedback.error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedItem: null,
    };
  },
  created() {
    // Fetch the item details using this.$route.params.id
    const itemId = this.$route.params.id;
    this.editedItem = { ...this.$store.state.items.find(item => item.id === itemId) };
  },
  methods: {
    editItem() {
      if (this.editedItem) {
        // Dispatch the 'editItem' action to update the item in the store
        this.$store.dispatch('editItem', this.editedItem);
      }

      // Redirect to the item list after editing the item
      this.$router.push('/');
    },
  },
};
</script>

<style>
.edit-item {
  margin: 20px;
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
