<script setup lang="ts">
import type { SocialsInterface } from "@/assets/interfaces/SocialsInterface";
import InfoCard from "../components/organisms/InfoCard.vue";

const socials: SocialsInterface[] = [
  {
    image: 'src/assets/img/socials/linkedin.svg',
    to: 'https://no.linkedin.com/in/ipeglin',
    alt: 'LinkedIn Logo',
  },
  {
    image: 'src/assets/img/socials/instagram.svg',
    to: 'https://instagram.com/ipeglin',
    alt: 'Instagram Logo',
  },
  {
    image: '/src/assets/img/socials/github.svg',
    to: 'https://github.com/ipeglin',
    alt: 'GitHub Logo'
  },
]
</script>

<template>
  <div class="about container">
    <h1 class="header" >About me</h1>
    <InfoCard title="Ian Philip Eglin" image="src/assets/img/profile.png" centerContent content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit ipsum sed enim vestibulum hendrerit quis sit amet justo. Sed gravida orci et euismod facilisis. " :socials="socials" />
    <InfoCard title="Card Title" underline-title content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit ipsum sed enim vestibulum hendrerit quis sit amet justo. Sed gravida orci et euismod facilisis. " :socials="socials" />
  </div>
</template>

<style scoped lang="scss">
  .about {
    width: 100%;
    margin: 0;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      padding: 0;
      margin: 0 auto;
      padding: 15px;
      text-align: center;
      color: $color-font-emphasize;
    }
  }
</style>