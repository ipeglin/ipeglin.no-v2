<script setup lang="ts">
  import { Gradient } from "@/composables/Gradient";

  import { ref } from "@vue/reactivity";
  import { onMounted } from "vue";
  import { shuffleArray } from '@/composables/array';

  interface Props {
    colors: string[];
    randomizeColors?: boolean;
  }

  const props = defineProps<Props>();

  const gradient = new Gradient();
  const gradientColors = ref<any>({});

  if (props.randomizeColors) {
    shuffleArray(props.colors);
  }

  props.colors.forEach((color, index) => {
    gradientColors.value[`--gradient-color-${index + 1}`] = color;
  })
  
  onMounted(() => {
    gradient.initGradient('#gradient-canvas');
  });
</script>

<template>
  <canvas
    id="gradient-canvas"
    data-transition-in
    :style="gradientColors"
  />
</template>

<style scoped lang="scss">
  #gradient-canvas {
    width: 100%;
    height: 100%;
    --gradient-color-1: $color-accent;
    --gradient-color-2: $color-white;
    --gradient-color-3: $color-success;
    --gradient-color-4: $color-gray;
  }
</style>