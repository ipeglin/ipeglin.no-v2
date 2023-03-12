<script setup lang="ts">
  import Mesh from '@/components/molecules/Mesh.vue';
  import Carousel from '../components/organisms/Carousel.vue';

  import { useGitHubStore } from '@/stores/github';
  import { sortGitHubReposByPushedAt } from '@/composables/sorting/github';
  import { parseGitHubRepoArrayToCarouselCard } from '@/composables/parsers/repoToCarouselCard';
  import { storeToRefs } from 'pinia';
  import { useAnimationStore } from '@/stores/animations';

  const githubStore = useGitHubStore();
  const animationStore = useAnimationStore();
  const { repositories, repoImages } = storeToRefs(githubStore);
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero__content">
        <div
          :class="`hero__title ${
            animationStore.showHeroTitle ? 'animate-header' : ''
          }`"
        >
          <h1>Hi, I'm Philip</h1>
        </div>
        <div
          :class="`hero__details ${
            animationStore.showHeroTitle ? 'animate-header' : ''
          }`"
        >
          <h2>a civ.eng. student from Norway</h2>
        </div>
      </div>
      <div class="hero__mesh-container">
        <Mesh
          class="hero__mesh"
          :colors="['#e7e7e7', '#8685ef', '#ffffff', '#e7e7e7', '#d3fbd8']"
        />
      </div>
    </section>
    <div id="down-arrow">
      <RouterLink to="#highlights" aria-label="Highlights">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-down"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </RouterLink>
    </div>
  </main>
  <main class="carouselSection">
    <Carousel
      v-if="repositories.length !== 0"
      id="highlights"
      title="Recent Projects"
      :content="parseGitHubRepoArrayToCarouselCard(
      sortGitHubReposByPushedAt(
        repositories.filter((repo: any) => repo.name !== 'ipeglin')
      ), repoImages
    ).slice(0, 4)"
    />
  </main>
</template>

<style scoped>
  @keyframes showTopText {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes showBottomText {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  .hero__content {
    overflow-y: hidden;
    position: absolute;
  }

  .animate-header h1 {
    animation: showTopText 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }

  .animate-header h2 {
    animation: showBottomText 0.5s;
    animation-delay: 1.75s;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
  }
</style>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
  // @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');

  .hero {
    height: calc(100vh - 2 * 60px);
    width: 100%;
    position: relative;
    .hero__content {
      z-index: 10;
      top: 35%;
      left: 20%;
      height: 130px;
      width: 50%;
      position: absolute;
      display: flex;
      flex-direction: column;

      .hero__title {
        position: relative;
        width: 100%;
        overflow: hidden;

        h1 {
          display: block;
          font-size: 5rem;
          margin: 0;
          font-family: 'Dancing Script', cursive;
          font-weight: bold;
        }
      }

      .hero__details {
        position: relative;
        width: 100%;
        overflow: hidden;
        bottom: 0;

        h2 {
          display: block;
          font-size: 1.55rem;
          margin: 0;
        }
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