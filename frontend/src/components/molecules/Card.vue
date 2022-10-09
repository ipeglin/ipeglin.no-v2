<script setup lang="ts">
  import type { CardInterface } from '@/assets/interfaces/CardInterface';
  import { sortStringArrayAlphabetically } from '@/composables/sorting/array';

  interface Props {
    content: CardInterface,
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="card">  
    <div class="card__image">
      <img class="card__image__asset" :src="props.content.image || 'https://img.freepik.com/free-vector/business-people-working-project-flat-icon_1262-18770.jpg?w=1060&t=st=1665266357~exp=1665266957~hmac=c3f32da600bcd5a7ba29231a96e4b547b804fd6bdfd6aeac3b099d428a3e4a9d'" />
    </div>
    <div class="card-content">
      <div class="card-content__title">
        <a v-if="props.content.link" :href="props.content.link.value" target="_blank"><h3 class="truncate">{{props.content.title}}</h3></a>
        <h3 v-else class="truncate">{{props.content.title}}</h3>
      </div>
      <div v-if="props.content.description" class="card-content__description truncate">{{props.content.description}}</div>  
      <div v-if="props.content.tags" class="card-content__tags">
        <span v-for="tag in sortStringArrayAlphabetically(props.content.tags)" class="card-content__tags__pill">{{tag}}</span>
      </div>
    </div>
    <div v-if="props.content.link" class="card__link">
      <a class="card__link__anchor" :href="props.content.link.value" target="_blank">
        {{props.content.link.name}}
        <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="15" y1="16" x2="19" y2="12"></line>
          <line x1="15" y1="8" x2="19" y2="12"></line>
        </svg>
      </a>
    </div>  
  </div>  
</template>

<style scoped lang="scss">
  .truncate {
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }

  .card {
    height: 245px;
    width: 275px;
    background-color: $color-card-background;
    margin: 20px;
    border-radius: 10px;
    position: relative;
    box-shadow: 4px 4px 30px 0px rgba($color-card-shadow, 0.1);

    &__image {
      width: 275px;
      height: 150px;
      border-radius: 10px 10px 0 0;
      position: absolute;
      
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,0.45) 100%);
      }
      
      &__asset {
        width: 100%;
        height: 150px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }

    &-content {
      position: absolute;
      display: flex;
      flex-direction: column;

      &__title {
        height: 40px;
        width: 90%;
        font-size: 1rem;
        padding-top: 6px;
        margin-bottom: 4px;
        padding-inline: 15px;
        margin-top: 105px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        a, h3 {
          margin: 0;
          color: $color-font-light;
          filter: invert(1);
        }

        a {
          text-decoration: none;
          color: $color-font-primary;
        }

      }

      &__tags {
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        text-overflow: clip;
        flex-wrap: nowrap;
        padding-top: 4px;
        
        &__pill {
          white-space: nowrap;
          font-size: .7rem;
          padding: 2px 8px;
          margin-left: 4px;
          border: 1px solid $color-black;
          border-radius: 12px;

          &:nth-child(1) {
            margin-left: 13px;
          }

          &:hover {
            cursor: default;
            border-color: hsl(131, 67%, 40%);
            color: hsl(131, 67%, 40%);
            transition-duration: .2s;
          }
        }
      }
  
      &__description {
        position: relative;
        width: 225px;
        padding-inline: 15px;
        padding-top: 4px;
        color: $color-font-emphasize;
        font-size: 0.8rem;
      }
  
    }

    &__link {
      position: absolute;
      bottom: 6px;
      right: 15px;

      &__anchor {
        text-decoration: none;
        color: $color-font-emphasize;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;

        svg {
          margin-left: 5px;
        }
      }
    }

    &:hover {
      transform: scale(1.05);
      transition-duration: .2s;
      box-shadow: 8px 8px 30px 0px rgba($color-card-shadow, 0.1);
    }
  }
</style>