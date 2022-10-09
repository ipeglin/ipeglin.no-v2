<script setup lang="ts">
  import type { SocialsInterface } from "@/assets/interfaces/SocialsInterface";
  import { useGitHubStore } from "@/stores/github";
  import BadgeHandler from "../handlers/BadgeHandler.vue";
  import Mesh from "../molecules/Mesh.vue";

  interface Props {
    image?: string,
    title: string,
    underlineTitle?: boolean,
    socials?: SocialsInterface[],
  }

  const props = defineProps<Props>();
  const githubStore = useGitHubStore();
</script>

<template>
    <div class="profile-card">
      <img v-if="image" :src="image" class="profile-card__image" />
      <div class="profile-card__content">
        <h1 :class="`profile-card__title ${underlineTitle ? 'underline' : ''}`">{{ title }}</h1>
        <div>Student and Developer</div>
  
        <div class="profile-card__location">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="11" r="3"></circle>
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
          </svg>
          <span>Trondheim, NO</span>
        </div>
  
        <div class="profile-card__info">
          <div>
            <div>{{ githubStore.numberOfFollowers }}</div>
            <div>Followers</div>
          </div>
          <div>
            <div>{{ githubStore.numberOfRepos }}</div>
            <div>Projects</div>
          </div>
        </div>
  
        <div v-if="socials?.length !== 0" class="profile-card__socials">
          <BadgeHandler v-for="link in props.socials" :props="link" />
        </div>
        <Mesh class="profile-card__mesh" :colors="['#ffffff', '#8685ef', '#e7e7e7', '#ffffff']" />
      </div>
    </div>
</template>

<style scoped lang="scss">
  .profile-card {
    background: $color-card-background;
    z-index: 100;
    border-radius: 12px;
    margin-inline: 12px;
    margin-top: 100px;
    min-width: 80%;
    height: 450px;
    max-width: 80%;
    box-shadow: 8px 8px 30px 0px rgba($color-card-shadow, 0.1);
    backdrop-filter: blur(50px);
    
    .profile-card__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 15px;
      
      .profile-card__mesh {
        position: absolute;
        height: calc(100%);
        top: 0;
        border-radius: 12px;
        z-index: -100;
        opacity: 0.25;
      }
      
      .profile-card__title {
        font-weight: 600;
        font-size: 2rem;

        &.underline {
          text-decoration: underline;
          text-underline-offset: 8px;
          text-decoration-thickness: 1.5px;
          text-decoration-color: $color-card-title-underline;
          margin-bottom: 18px;
        }

        &+div {
          font-size: 1rem;
          font-weight: 500;
        }
      }

      .profile-card__location {
        margin-block: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .9rem;
        gap: 10px;
      }

      .profile-card__info{
        display: flex;
        justify-content: center;
        gap: 50px;
        margin-block: 10px;

        @media screen and (max-width: 576px) {
          gap: 30px;
        }

        & > div {
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 1px;
          text-align: center;

          & > *:first-child {
            font-weight: bold;
            letter-spacing: 3px;
            font-size: 2rem;
            margin-bottom: 15px;
          }

          & > *:last-child {
            font-size: 1rem;
            opacity: .7;
          }
        }
      }

      .profile-card__socials {
        margin-top: 10px;
        margin-bottom: 20px;
        width: 100%;
        max-width: 150px;  
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
  }

  .profile-card__image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;
    top: -85px;
    left: calc(50% - 75px);
    background-color: $color-white;
    padding: 2px;
    margin-bottom: -80px;
  }
</style>