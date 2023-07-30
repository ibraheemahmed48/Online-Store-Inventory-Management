<template>
  <div class="item-list">
    <!-- Sorting options -->
    <label>Sort By:</label>
    <select v-model="sortBy">
      <option value="name">Name</option>
      <option value="price">Price</option>
      <option value="quantity">Quantity</option>
      <option value="orderDate">Order Date</option>
    </select>

    <!-- Filtering options -->
    <label>Filter By:</label>
    <input v-model="filterText" placeholder="Type to filter by name" />

    <!-- Item List -->
    <ul>
      <li v-for="item in filteredItems" :key="item.id" class="item">
        <div class="item-image">
          <img :src="item.image" alt="Item Image" />
        </div>
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p>Price: {{ item.price }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Order Date: {{ item.orderDate }}</p>
          <button @click="editItem(item.id)">Edit</button>
          <button @click="confirmDelete(item.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: 'name',
      filterText: '',
    };
  },
  computed: {
    // Filtered items based on sorting and filtering options
    filteredItems() {
      let sortedItems = this.$store.state.items.slice(); // Create a copy of the items array
      switch (this.sortBy) {
        case 'name':
          sortedItems.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'price':
          sortedItems.sort((a, b) => a.price - b.price);
          break;
        case 'quantity':
          sortedItems.sort((a, b) => a.quantity - b.quantity);
          break;
        case 'orderDate':
          sortedItems.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
          break;
        default:
          break;
      }

      if (this.filterText) {
        const filterTextLower = this.filterText.toLowerCase();
        sortedItems = sortedItems.filter(item => item.name.toLowerCase().includes(filterTextLower));
      }

      return sortedItems;
    },
  },
  methods: {
    editItem(itemId) {
      this.$router.push(`/edit/${itemId}`);
    },
    confirmDelete(itemId) {
      this.$router.push(`/delete/${itemId}`);
    },
  },
};
</script>

<style>
.item-list {
  margin: 20px;
}

label {
  font-weight: bold;
}

.select-wrapper {
  display: inline-block;
}

ul {
  list-style-type: none;
  padding: 0;
}

.item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.item-image img {
  max-width: 100px;
  max-height: 100px;
  margin-right: 20px;
}

.item-details h3 {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.item-details p {
  margin: 5px 0;
}

button {
  margin-top: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
