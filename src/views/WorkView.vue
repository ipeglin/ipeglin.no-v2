<script setup lang="ts">
  import { parseGitHubRepoArrayToCard } from "@/composables/parsers/repoToCard";
  import { sortGitHubReposByCreatedAt } from "@/composables/sorting/github";
  import { useGitHubStore } from "@/stores/github";
  import { storeToRefs } from "pinia";
  import CardSection from "../components/organisms/CardSection.vue";

  const githubStore = useGitHubStore();
  const { repositories, repoImages } = storeToRefs(githubStore);
</script>

<template>
  <main class="container">
    <h1 class="header">My projects</h1>
    <CardSection :content="parseGitHubRepoArrayToCard(
      sortGitHubReposByCreatedAt(
        repositories.filter((repo: any) => repo.name !== 'ipeglin')
      ), repoImages
    )" />
  </main>
</template>

<style scoped lang="scss">
  .header {
      padding: 0;
      margin: 0 auto;
      margin-bottom: 30px;
      padding: 15px;
      text-align: center;
      color: $color-font-emphasize;
    }
</style>