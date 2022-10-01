<script setup lang="ts">
  import type { CardInterface } from '@/assets/interfaces/CardInterface';
  import Card from '../molecules/Card.vue';

  interface Props {
    title?: string,
    content: CardInterface[];
  }

  const props = defineProps<Props>();
</script>

<template>
  <section class="card-section">
    <h1 v-if="props.title" class="card-section__header">{{props.title}}</h1>
    <div class="card-section__cards">
      <Card v-for="card in props.content" :content="card" />
    </div>
  </section>
</template>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .card-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;

    &__cards {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      flex-wrap: wrap;
    }
  }
</style>