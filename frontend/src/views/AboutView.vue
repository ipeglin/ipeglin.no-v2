<script setup lang="ts">
import type { SocialsInterface } from "@/assets/interfaces/SocialsInterface";
import type { NumberedStepInterface, TimelineStepInterface } from '@/assets/interfaces/StepInterface';

import InfoCard from "../components/organisms/InfoCard.vue";
import StepperHandler from "../components/handlers/StepperHandler.vue";

const socials: SocialsInterface[] = [
  {
    image: 'src/assets/img/socials/linkedin.svg',
    to: 'https://no.linkedin.com/in/ipeglin',
    alt: 'Visit LinkedIn profile',
  },
  {
    image: '/src/assets/img/socials/github.svg',
    to: 'https://github.com/ipeglin',
    alt: 'Visit GitHub profile'
  },
  {
    image: 'src/assets/img/socials/twitter.svg',
    to: 'https://twitter.com/philipeglin',
    alt: 'Visit Twitter profile'
  },
  {
    image: 'src/assets/img/socials/instagram.svg',
    to: 'https://instagram.com/ipeglin',
    alt: 'Visit Instagram profile',
  },
]

const stepperContent: NumberedStepInterface[] = [
  {
    title: "Elsys 1.sem",
    caption: ['TTT4255', 'TTT4203', 'TMA4101', 'TDT4110'],
    active: false,
  },
  {
    title: "Elsys 2.sem",
    caption: ['TDT4102', 'TMA4106', 'TTT4260', 'TMA4145'],
    active: false,
  },
  {
    title: 'Elsys 3.sem',
    caption: ['TDT4160', 'TFY4115', 'TMA4111', 'TTT4265'],
    active: true,
  },
]

const timelineContent: TimelineStepInterface[] = [
  {
    title: 'Learning assistant',
    caption: 'DCST1003: Grunnleggende programmering',
    start: new Date('2020-08-01'),
    end: new Date('2020-12-14'),
  },
  {
    title: 'Webutvikler',
    caption: 'Sommerstudent, Adresseavisen',
    start: new Date('2021-06-13'),
    end: new Date('2021-07-05'),
  },
  {
    title: 'Learning assistant',
    caption: 'TDT4110: Informatikk, grunnkurs',
    start: new Date('2021-07-22'),
  }
]

const infoCardContent: string = "I am currently pursuing an education at NTNU, Trondheim, where I specialice in electronics systems design. In my spare time I enjoy programming and webdevelopment. Previously I've had experience with larger code bases, i.e. while being a summer intern at Polaris Media Teknologi."
</script>

<template>
  <div class="about container">
    <h1 class="header" >About me</h1>
    <InfoCard center-content title="Ian Philip Eglin" image="src/assets/img/profile.png" :content="infoCardContent" :socials="socials" />
    <StepperHandler title="Experience" :content="timelineContent" />
    <StepperHandler title="Education" :content="stepperContent" />
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