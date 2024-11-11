<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleRegister() {
        axios.post('http://localhost:8080/auth/register', { username: this.username, password: this.password })
          .then(response => {
            this.$router.push('/login');
          })
          .catch(error => {
            alert(error.response.data);
          });
      }
    }
  };
  </script>
  