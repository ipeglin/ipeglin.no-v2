<script setup lang="ts">
import type { CardInterface } from '@/assets/interfaces/CardInterface';

interface Props {
  title?: string,
  content: CardInterface[];
}

const props = defineProps<Props>();
</script>

<template>
  <section class="card-section container">
    <Card v-for="card in props.content" />
  </section>
</template>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .card-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 100%;
    flex-wrap: wrap;
  }
</style>