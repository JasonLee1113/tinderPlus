<template>
  <div>
    <h2>Your Profile</h2>
    <button @click="logout">Logout</button>
    <form @submit.prevent="updateProfile">
      <input type="text" v-model="fullName" placeholder="Full Name" required />
      <input type="number" v-model="age" placeholder="Age" required />
      <input type="text" v-model="bio" placeholder="Bio" required />
      <button type="submit">Save</button>
    </form>

    <input type="file" @change="uploadPhoto" />
    <img v-if="photoUrl" :src="photoUrl" alt="Profile Photo" />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      fullName: '',
      age: '',
      bio: '',
      photoUrl: ''
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token'); // 清除 JWT
      this.$router.push('/'); // 跳轉回首頁
    },
    updateProfile() {
      const token = localStorage.getItem('token');
      axios.put('http://localhost:8080/profile', { fullName: this.fullName, age: this.age, bio: this.bio }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        alert('Profile updated');
      })
      .catch(error => {
        alert(error.response.data);
      });
    },
    uploadPhoto(event) {
      const formData = new FormData();
      formData.append('photo', event.target.files[0]);

      const token = localStorage.getItem('token');
      axios.post('http://localhost:8080/upload', formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        this.photoUrl = response.data.photoUrl;
      })
      .catch(error => {
        alert(error.response.data);
      });
    }
  }
};
</script>
