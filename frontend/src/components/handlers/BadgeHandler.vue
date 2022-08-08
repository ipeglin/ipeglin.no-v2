<script setup lang="ts">
import BadgeLink from "../atoms/BadgeLink.vue";
import Badge from '../atoms/Badge.vue';
interface Props {
  props: {
    image: string,
    to?: string,
    alt?: string,
  }
}
const { props } = defineProps<Props>();
</script>

<template>
  <BadgeLink v-if="props.to !== undefined" :image="props.image" :link="props.to" :title="props?.alt || 'Badge Link'" />
  <Badge v-else :image="props.image" :title="props?.alt || 'Image'" />
</template>

<style scoped lang="scss">
  * {
    padding-inline: 5px;
    margin: 0;
  }
</style>