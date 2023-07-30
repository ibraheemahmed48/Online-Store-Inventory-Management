<template>
  <div class="add-item">
    <h2>Add New Item</h2>
    <!-- Form to add a new item -->
    <form @submit.prevent="addItem">
      <!-- Input fields for item properties: name, price, quantity, image, order date -->
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" v-model="price" required />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity:</label>
        <input type="number" v-model="quantity" required />
      </div>
      <div class="form-group">
        <label for="image">Image URL:</label>
        <input type="url" v-model="image" />
      </div>
      <div class="form-group">
        <label for="orderDate">Order Date:</label>
        <input type="date" v-model="orderDate" required />
      </div>

      <!-- Submit button -->
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      price: null,
      quantity: null,
      image: '',
      orderDate: '',
    };
  },
  methods: {
    addItem() {
      // Create a new item object with form data
      const newItem = {
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        image: this.image,
        orderDate: this.orderDate,
        id: Math.random().toString(36).substring(7), // Generate a random ID
      };

      // Dispatch the 'addItem' action to add the item to the store
      this.$store.dispatch('addItem', newItem);

      // Reset form fields
      this.name = '';
      this.price = null;
      this.quantity = null;
      this.image = '';
      this.orderDate = '';

      // Redirect to the item list after adding the item
      this.$router.push('/');
    },
  },
};
</script>

<style>
.add-item {
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
