<script setup lang="ts">
interface Props {
  image: string,
  link: string,
}

const props = defineProps<Props>();
</script>

<template>
  <a class="badge-link" :href="link">
    <img class="badge-image" :src="image" loading='lazy' />
  </a>
</template>

<style scoped lang="scss">
.badge-image {
    width: 20px;
    height: 20px;
  }
</style>