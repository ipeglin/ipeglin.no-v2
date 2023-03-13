<script setup lang="ts">
  import CardSkeleton from '@/components/molecules/skeletons/CardSkeleton.vue';
</script>

<template>
  <section class="card-section">
    <h1 class="card-section__header" />
    <div class="card-section__cards">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
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