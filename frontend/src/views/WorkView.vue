<script setup lang="ts">
  import type { CardInterface } from "@/assets/interfaces/CardInterface";
  import { parseGitHubRepoArrayToCard } from "@/composables/parsers/repoToCard";
  import { sortGitHubReposByCreatedAt } from "@/composables/sorting/github";
  import { useGitHubStore } from "@/stores/github";
  import { onBeforeMount, ref } from "vue";
  import CardSection from "../components/organisms/CardSection.vue";

  const githubStore = useGitHubStore();
  
  const cardSectionContent = ref<{
    content: CardInterface[],
  }>({content: []});

  onBeforeMount(async () => {
    cardSectionContent.value.content = await githubStore.repos;
    const repoImages = await githubStore.images;
    cardSectionContent.value.content = await parseGitHubRepoArrayToCard(
      sortGitHubReposByCreatedAt(
        githubStore.repos.filter((repo: any) => repo.name !== 'ipeglin')
      ), repoImages
    )
  })

</script>

<template>
  <main class="container">
    <h1 class="header">My projects</h1>
    <CardSection :content="cardSectionContent.content" />
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