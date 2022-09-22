<script setup lang="ts">
  import type { TimelineStepInterface } from '@/assets/interfaces/StepInterface';

  interface Props {
    content: TimelineStepInterface[],
  }

  const props = defineProps<Props>();

  const sortTimeline = (content: TimelineStepInterface[]): TimelineStepInterface[] => {
    return content.sort((a, b) => { 
      return b.start - a.start
    });
  }
</script>

<template>
    <div v-for="step in sortTimeline(content)" class="step">
      <div class="node-container">
        <div class="node">
          {{ step.start.getFullYear() }}
        </div>
      </div>
      <div class="text-container">
        <div class="title">{{ step.title }}</div>
        <div v-if="step.caption" class="caption">{{ step.caption }}</div>
      </div>
    </div>
</template>

<style scoped lang="scss">
  .step {
    position: relative;
    min-height: 1em;
    width: 55%;
    max-width: 325px;
    margin: 0 auto;

    .title {
      line-height: 1.5em;
      font-weight: bold;
      margin-left: 1.6em;
      color: $color-font-emphasize;
    }

    .caption {
      font-size: .8em;
      margin-left: 2em;
      color: $color-font-primary;
    }

    .node {
      background: none;
      position: relative;
      width: 3em;
      height: 1.5em;
      line-height: 1.5em;
      color: $color-font-primary;
      text-align: center;
      box-shadow: 0 0 0 3px $color-white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
    }

    .node:after {
      content: ' ';
      position: absolute;
      display: block;
      top: 3px;
      right: 50%;
      bottom: 1px;
      left: 50%;
      height: 95%;
      width: 1px;
      transform: scale(1, 1.91);
      transform-origin: 50% -100%;
      background-color: rgba(0, 0, 0, .25);
      z-index: -1;
    }
    + .step {
      margin-top: 1.5em;
    }
      &:last-child .node:after {
        display: none;
      }
   
    > div:first-child {
      position: static;
      height: 0;
    }
  
    > div:not(:first-child) {
      margin-left: 1.5em;
      padding-left: 1em;
    }
  }
</style>