<script setup lang="ts">
  import type { NumberedStepInterface } from '@/assets/interfaces/StepInterface';

  interface Props {
    content: NumberedStepInterface[],
  }

  const props = defineProps<Props>();

  const sortCaptionArray = (content: string[], locale: string): string[] => {
    return content.sort((a, b) => {
      return String(a).localeCompare(String(b), locale);
    })
  }
</script>

<template>
    <div v-for="(step, index) in content" :class="`step ${step.active ? 'step-active' : ''}`">
      <div>
        <div class="circle">
          <svg v-if="step.active" xmlns="http://www.w3.org/2000/svg" class="active-icon icon icon-tabler icon-tabler-chevron-right" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
          <span v-else>{{ index + 1 }}</span>
        </div>
      </div>
      <div>
        <div class="title">{{ step.title }}</div>
        <div v-if="step.caption && !Array.isArray(step.caption)" class="caption">{{ step.caption }}</div>
        <div v-else-if="step.caption && Array.isArray(step.caption)" class="caption">
          <div v-for="paragraph in sortCaptionArray(step.caption, 'no')" class="paragraph-list">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="15" height="15" viewBox="0 0 24 21" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="9 6 15 12 9 18"></polyline>
            </svg>
            <p>{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">
  .step {
    position: relative;
    min-height: 1em;
    align-self: center;
    width: 55%;
    max-width: 330px;
    margin-left: 25px;

    .title, .caption {
      color: $color-font-subtle;
    }

    .title {
      line-height: 1.5em;
      font-weight: bold;
    }

    .caption {
      font-size: .8em;

      .paragraph-list {
        display: flex;
        flex-direction: row;
        align-items: start;
        margin-bottom: -.3em;

        padding-bottom: 2px;

        p {
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }


    .circle {
      background: $color-darkgray;
      position: relative;
      width: 1.5em;
      height: 1.5em;
      line-height: 1.5em;
      border-radius: 100%;
      color: $color-white;
      text-align: center;
      box-shadow: 0 0 0 3px $color-white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .active-icon {
        color: $color-font-emphasize;
      }
    }

    .circle:after {
      content: ' ';
      position: absolute;
      display: block;
      top: -60px;
      right: 50%;
      bottom: 1px;
      left: 50%;
      height: 100%;
      width: 1px;
      transform: scale(1, 400%);
      transform-origin: 50% -100%;
      background-color: rgba(0, 0, 0, .25);
      z-index: -1;
    }

    &.step-active {
      .title {
        color: $color-font-emphasize;
      }
  
      .caption {
        color: $color-font-primary;
      }
  
      .circle {
        // background: $color-reenforce;
        background: $color-success; 
      }
    }

    + .step {
      margin-top: 1.5em;
    }
      &:last-child .circle:after {
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