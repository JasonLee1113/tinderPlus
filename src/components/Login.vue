<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
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
      handleLogin() {
        axios.post('http://localhost:8080/auth/login', { username: this.username, password: this.password })
          .then(response => {
            localStorage.setItem('token', response.data.token);
            this.$router.push('/profile');
          })
          .catch(error => {
            alert('Invalid credentials');
          });
      }
    }
  };
  </script>
  