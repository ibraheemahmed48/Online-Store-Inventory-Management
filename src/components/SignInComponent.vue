<template>
    <div class="signin-container">
      <h2>Sign In</h2>
      <form @submit.prevent="signIn" class="signin-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" class="signin-button">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signIn() {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // Login successful, you can navigate to a different route here if needed.
            console.log('User logged in successfully.');
          })
          .catch((error) => {
            console.error('Error logging in:', error.message);
          });
      },
    },
  };
  </script>
  
  <style>
  .signin-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .signin-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  .form-group label {
    font-weight: bold;
  }
  
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .signin-button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .signin-button:hover {
    opacity: 0.8;
  }
  </style>
  