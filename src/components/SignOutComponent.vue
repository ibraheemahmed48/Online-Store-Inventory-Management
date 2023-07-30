<template>
    <div class="signout-container">
      <h2>Sign Out</h2>
      <button @click="signOut" class="signout-button">Sign Out</button>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/app';
  import 'firebase/auth';
  
  export default {
    methods: {
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            // Logout successful, you can navigate to a different route here if needed.
            console.log('User logged out successfully.');
          })
          .catch((error) => {
            console.error('Error logging out:', error.message);
          });
      },
    },
  };
  </script>
  
  <style>
  .signout-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 10px;
  }
  
  .signout-button {
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .signout-button:hover {
    opacity: 0.8;
  }
  </style>
  