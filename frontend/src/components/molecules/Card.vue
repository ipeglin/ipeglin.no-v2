<script setup lang="ts">
import type { LinkInterface } from '@/assets/interfaces/LinkInterface';
import { mdiArrowRight } from '@mdi/js';

  interface Props {
    title: string,
    content: string,
    image?: string,
    link?: LinkInterface,
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="card-container">
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
  </div>
</template>

<style scoped lang="scss">
  .card-container {
    max-width: 300px;
    min-width: 100px;
    margin: 0 auto;
    margin-top: 20vh;

    .card {
      background: $color-reenforce;
      border-radius: 13px;
      height: 325px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      border: 1px solid $color-darkgray;

      .image-container {
        height: 55%;
        width: 100%;
      }

      .card-image {
        width: 100%;
        height: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        object-fit:cover;
      }

      .text-container {
        margin: 0 auto;
        width: 90%;
        max-height: 200px;
        min-height: 300px;
        margin-bottom: auto;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;

        .card-title {
          font-weight: 600;
          font-size: 1.6em;
          color: $color-font-primary;

        }

        h1 {
          margin-block: 10px;
        }

        .card-caption {
          margin: 0;
          font-weight: 400;
          font-size: .9em;
        }

      }
      
      .link-container {
        margin-block: 20px;
        width: 100%;
        margin-right: 50px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .card-link {
          color: $color-font-primary;
          text-decoration-color: $color-font-primary;
          text-underline-offset: 2px;
          text-decoration-thickness: 1.5px;
          
          .arrow-icon {
            color: $color-accent;
            margin-left: 8px;
            transform: scale(1.3);
          }
          }
      }
    }
  }

</style>