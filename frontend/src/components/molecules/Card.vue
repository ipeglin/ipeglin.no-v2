<script setup lang="ts">
import type { CardInterface } from '@/assets/interfaces/CardInterface';
import type { LinkInterface } from '@/assets/interfaces/LinkInterface';
import { mdiArrowRight } from '@mdi/js';

  interface Props {
    content: CardInterface
  }

  const props = defineProps<Props>();
</script>

<template>
  <!-- <div class="card-container">
    <div class="card">
      <div v-if="image" class="image-container">
        <img :src="image" class="card-image" />
      </div>
      <div class="text-container">
        <h1 class="card-title">{{ title }}</h1>
        <p class="card-caption">{{ content }}</p>
      </div>
      <div class="link-container">
        <RouterLink v-if="link" class="card-link" :to="link.value">{{ link.name }}<svg-icon class="arrow-icon" type="mdi" :path="mdiArrowRight" :size="14"></svg-icon></RouterLink>
      </div>
    </div>
  </div> -->
  <div class="card">  
    <div class="card__image"></div>  
    <div class="card__title"><h3>CAKE</h3></div>  
    <div class="card__description">$3</div>  
    <div class="card_link">BUY</div>  
  </div>  
</template>

<style scoped lang="scss">
  .card {
    height: 270px;
    width: 200px;
    background-color: $color-card-background;
    margin: 20px;
    border-radius: 10px;

    &__image {
      width: 200px;
      height: 200px;
      border-radius: 10px 10px 0 0;
    }

    &__title {
      background-color: red;
      height: 20px;
      width: 200px;
      text-align: center;
    }

    &__description {
      background-color: yellow;
      width: fit-content;
      text-align: center;
      margin: 0 auto;
      padding: 6px 15px;
    }

    &:hover {
      transform: scale(1.05);
      transition-duration: .2s;
      box-shadow: 8px 8px 30px 0px rgba($color-card-shadow, 0.1);
    }
  }
</style>