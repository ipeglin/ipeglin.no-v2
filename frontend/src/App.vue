<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from './components/molecules/NavBar.vue';
  import Footer from './components/molecules/Footer.vue';
import { useGitHubStore } from './stores/github';

  const githubStore = useGitHubStore();
  githubStore.updateStore();
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
