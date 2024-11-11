<template>
    <div>
      <h2>Matches</h2>
      <div v-for="user in users" :key="user.id">
        <p>{{ user.username }}</p>
        <button @click="matchUser(user.id)">Match</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        users: []
      };
    },
    methods: {
      getUsers() {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/users', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
          this.users = response.data;
        });
      },
      matchUser(userId) {
        const token = localStorage.getItem('token');
        axios.post(`http://localhost:8080/match/${userId}`, {}, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
          alert('Matched successfully');
        });
      }
    },
    mounted() {
      this.getUsers();
    }
  };
  </script>
  