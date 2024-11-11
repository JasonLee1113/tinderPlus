<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
// import App from './App.vue';
import router from './router/index.js';


export default defineComponent({
  name: 'App',
});


</script>