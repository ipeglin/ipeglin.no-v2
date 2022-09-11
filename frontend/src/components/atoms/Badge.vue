<script setup lang="ts">
interface Props {
  image: string,
}
const props = defineProps<Props>();
</script>

<template>
  <img class="badge-image" :src="image" loading='lazy'/>
</template>

<style scoped lang="scss">
.badge-image {
    width: 25px;
    height: 25px;
  }
</style>