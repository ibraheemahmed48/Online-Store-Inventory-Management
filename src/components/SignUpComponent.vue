<template>
    <div class="container">
      <h2>Sign Up</h2>
      <form @submit.prevent="signUp">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer;">
          Sign Up
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signUp() {
        // ...
      },
    },
  };
  </script>
  