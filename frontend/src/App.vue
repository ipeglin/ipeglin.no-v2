<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from './components/molecules/NavBar.vue';
  import Footer from './components/molecules/Footer.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
