<script setup lang="ts">
  import type { CarouselCardInterface } from '@/assets/interfaces/CarouselCardInterface';
  import { ref, toRefs } from '@vue/reactivity';
  import { VueAgile } from 'vue-agile';
  
  interface Props {
    id: string;
    title?: string;
    content: CarouselCardInterface[];
  };
            
  const props = defineProps<Props>();
  const { content } = toRefs(props);

  const showLink = ref<boolean>(false);
</script>

<template>
  <section class="carousel" :id="props.id">
    <div class="carousel__container">
      <h1 v-if="props.title" class="title">{{ props.title }}</h1>
      <VueAgile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade pause-on-hover pause-on-dots-hover autoplay>
        <div v-for="(item, index) in content" class="slide" @mouseover="showLink = true" @mouseleave="showLink = false">
          <div class="slide__content">
            <div class="slide__content__header">
              <h1>{{ item.title }}</h1>
            </div>
          </div>
          <a v-if="item.link" :class="`navlink ${showLink ? '' : 'hidden'}`" :href="item.link" target="_blank">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon icon icon-tabler icon-tabler-arrow-narrow-right" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="15" y1="16" x2="19" y2="12"></line>
              <line x1="15" y1="8" x2="19" y2="12"></line>
            </svg>
          </a>
          <div class="slide__background">
            <img v-if="index % 2 == 0" alt="Woman at circus" src="https://images.unsplash.com/photo-1509549649946-f1b6276d4f35?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
            <img v-else alt="Woman on bridge" src="https://images.unsplash.com/photo-1511469054436-c7dedf24c66b?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9"/>
          </div>
        </div>
      </VueAgile>
    </div>


  </section>
</template>

<style scoped lang="scss">
  @import url('https://unpkg.com/vue-agile/dist/VueAgile.css');

  .carousel {
    width: 960px;
    height: 550px;

    &__container {
      width: 816px;
      height: 550px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      .title {
        align-self: center;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: $color-accent;
        text-decoration-thickness: 2px;
        font-size: 2rem;
      }

      .slide {
        background: green;
        position: relative;
        display: block;
        height: 100%;
        min-height: 450px;

        &__background {
          img {
            width :100%;
            height: 100%;
          }
        }

        &__content {
          position: absolute;
          left: 5%;
          top: 75%;
          height: 10%;

          &__header {
            display: flex;
            flex: row;
            align-items: center;

          }
          
          h1, p {
            color: $color-white;
            padding: 0;
            margin: 0;
            line-height: 2.5rem;
          }

          h1 {
            font-size: 2.5rem;
            margin: 0;
          }

          p {
            font-size: 1.2rem;
          }

        }

        .navlink {
            color: $color-white;
            padding: 0;
            line-height: 3rem;
            text-decoration: none;
            color: $color-white;
            font-size: 1.2rem;
            padding: 0;
            position: absolute;
            left: 5%;
            bottom: 5%;
            transition-duration: .2s;
            display: flex;
            flex-direction: row;
            align-items: center;

            &.hidden {
              opacity: 0;
              margin-left: -15px;
            }

            .arrow-icon {
              margin-left: 5px;
              transition-duration: .2s;

              &.hidden {
                opacity: 0;
              }
            }

          }

        &__background {
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: -100;

          img {
            width: 100%;
            -o-object-fit: cover;
            object-fit: cover;
          }
        }
      }
    }
  }

</style>

<style lang="scss">
  .agile__actions {
    .agile__dots {
      bottom: 10px;
      flex-direction: column;
      right: 30px;
      position: absolute;
    }

    .agile__dot {
      margin: 5px 0;
      
      button {
        background-color: transparent;
        border: 1px solid #fff;
        cursor: pointer;
        display: block;
        height: 10px;
        font-size: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
        transition-duration: 0.3s;
        width: 10px;
      }
      &--current button, :hover button {
        background-color: #fff;
      }
    }
  }
</style>