<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from './components/molecules/NavBar.vue';
  import Footer from './components/molecules/Footer.vue';
  import { onBeforeMount } from 'vue';
  import { useGitHubStore } from './stores/github';

  const githubStore = useGitHubStore();

  onBeforeMount(async () => {
    await githubStore.fetchRepositories();
    await githubStore.fetchFollowers();
    await githubStore.fetchRepoImages();
  });
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
