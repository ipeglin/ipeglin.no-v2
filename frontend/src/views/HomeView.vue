<script setup lang="ts">
  import Mesh from '@/components/molecules/Mesh.vue';
  import Carousel from '../components/organisms/Carousel.vue';

  import { useGitHubStore } from '@/stores/github';
  import { sortGitHubReposByPushedAt } from '@/composables/sorting/github';
  import { parseGitHubRepoArrayToCarouselCard } from '@/composables/parsers/repoToCarouselCard';
  import { storeToRefs } from 'pinia';
  
  const githubStore = useGitHubStore();
  const { repositories, repoImages } = storeToRefs(githubStore);
  
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">Hi, I'm Philip</h1>
        <h2 class="hero__details">a civ.eng. student from Norway</h2>
      </div>
      <div class="hero__mesh-container">
        <Mesh class="hero__mesh" :colors="['#8685ef', '#d3fbd8','#ffffff', '#e7e7e7', '#e7e7e7']" randomize-colors />
      </div>
    </section>
    <div id="down-arrow">
      <RouterLink to="#highlights" aria-label="Highlights">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </RouterLink>
    </div>
  </main>
  <main class="container">
    <Carousel v-if="repositories.length !== 0" id="highlights" title="Recent Projects" :content="parseGitHubRepoArrayToCarouselCard(
      sortGitHubReposByPushedAt(
        repositories.filter((repo: any) => repo.name !== 'ipeglin')
      ), repoImages
    ).slice(0, 4)"/>
  </main>
</template>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
  // @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');

  .hero {
    height: calc(100vh - 2*60px);
    width: 100%;
    position: relative;
    .hero__content {
      z-index: 10;
      top: 35%;
      left: 20%;
      height: 30%;
      width: 50%;
      position: absolute;
      display: flex;
      flex-direction: column;

      .hero__title {
        font-size: 5rem;
        margin: 0;
        font-family: 'Dancing Script', cursive;
        // font-family: 'Playfair Display', serif;
        font-weight: bold;
      }

      .hero__details {
        font-size: 1.55rem;
        margin: 0;
      }
    }
    
    .hero__mesh-container {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  #down-arrow {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a {
      color: $color-accent;
    }
  }
    
</style>