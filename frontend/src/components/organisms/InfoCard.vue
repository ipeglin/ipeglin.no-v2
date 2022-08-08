<script setup lang="ts">
  import type { SocialsInterface } from "@/assets/interfaces/SocialsInterface";
  import BadgeHandler from "../handlers/BadgeHandler.vue";


  interface Props {
    image?: string,
    title: string,
    underlineTitle?: boolean,
    content: string,
    centerContent?: boolean,
    socials?: SocialsInterface[],
  }

  const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <img v-if="image" :src="image" class="profile-image" />
    <div class="card-content">
      <h1 :class="`card-title ${underlineTitle ? 'underline' : ''}`">{{ title }}</h1>
      <p :class="`card-text ${centerContent ? 'centered' : ''}`">{{ content }}</p>
      <div v-if="socials?.length !== 0" class="badge-container">
        <BadgeHandler v-for="link in props.socials" :props="link" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    background: $color-card-background;
    border-radius: 12px;
    margin-inline: 12px;
    margin-top: 80px;
    min-width: 350px;
    max-width: calc($max-width - 10%);
    box-shadow: 8px 8px 30px 0px rgba($color-card-shadow, 0.1);

    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 15px;

      .card-title {
        font-weight: 600;
        font-size: 1.1rem;

        &.underline {
          text-decoration: underline;
          text-underline-offset: 8px;
          text-decoration-thickness: 1.5px;
          text-decoration-color: $color-card-title-underline;
          margin-bottom: 18px;
        }
      }

      .card-text {
        font-weight: 400;
        font-size: .7rem;
        margin: 0;
        width: 95%;
        text-align: justify;
        
        &.centered {
          text-align: center;
        }
      }

      .badge-container {
        margin-top: 20px;
        width: 50%;
        max-width: 150px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    top: -65px;
    left: calc(50% - 52px);
    background-color: $color-white;
    padding: 2px;
    margin-bottom: -80px;
  }
</style>