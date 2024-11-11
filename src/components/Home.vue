<template>
    <div>
      <h1>Welcome to the Dating App</h1>
      <button @click="goToLogin">Login</button>
      <button @click="goToRegister">Register</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToLogin() {
        this.$router.push('/login'); // 跳轉到登入頁面
      },
      goToRegister() {
        this.$router.push('/register'); // 跳轉到註冊頁面
      }
    }
  };
  </script>
  