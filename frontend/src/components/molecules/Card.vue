<script setup lang="ts">
  import type { CardInterface } from '@/assets/interfaces/CardInterface';

  interface Props {
    content: CardInterface,
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="card">  
    <div class="card__image">
      <img class="card__image__asset" :src="props.content.image || 'https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I.jpg'" />
    </div>
    <div class="card-content">
      <div class="card-content__title"><h3 class="truncate">{{props.content.title}}</h3></div>  
      <div class="card-content__description truncate">{{props.content.description}}</div>  
    </div>
    <div v-if="props.content.link" class="card__link">
      <a class="card__link__anchor" :href="props.content.link" target="_blank">View</a>
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
    height: 230px;
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
      top: 0;

      &__title {
        height: 40px;
        width: 75%;
        font-size: 1rem;
        padding: 6px 15px;
        margin-top: 105px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
          margin: 0;
        }
      }
  
      &__description {
        width: 225px;
        padding: 6px 15px;
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
      }
    }

    &:hover {
      transform: scale(1.05);
      transition-duration: .2s;
      box-shadow: 8px 8px 30px 0px rgba($color-card-shadow, 0.1);
    }
  }
</style>