<script setup lang="ts">
import type { SocialsInterface } from "@/assets/interfaces/SocialsInterface";
import type { NumberedStepInterface, TimelineStepInterface } from '@/assets/interfaces/StepInterface';

import InfoCard from "../components/organisms/InfoCard.vue";
import StepperHandler from "../components/handlers/StepperHandler.vue";
import { setActiveSemester } from "@/composables/setActiveSemester";

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
    caption: ['ITGK', 'Matte 1', 'ElsysGK', 'ADE'],
    start: new Date('2021-08-15'),
    end: new Date('2021-12-16'),
    active: false,
  },
  {
    title: "Elsys 2.sem",
    caption: ['ESDA I', 'Matte 2', 'Statstikk', 'OOP'],
    start: new Date('2021-12-16'),
    end: new Date('2022-07-05'),
    active: false,
  },
  {
    title: 'Elsys 3.sem',
    caption: ['Datamaskiner og digitalteknikk', 'Fysikk', 'Matte 3', 'ESDA II'],
    start: new Date('2022-07-04'),
    end: new Date('2022-12-14'),
    active: false,
  },
  {
    title: 'Elsys 4.sem',
    caption: ['Elektromagnetisme', 'Grunnlag for faststoffelektronikk', 'Matte 4', 'Elsys, prosjekt'],
    start: new Date('2022-12-14'),
    end: new Date('2023-07-10'),
    active: false,
  },
]

const timelineContent: TimelineStepInterface[] = [
  {
    title: 'Learning assistant',
    caption: 'DCST1003: Grunnleggende programmering',
    start: new Date('2021-08-01'),
    end: new Date('2021-12-14'),
  },
  {
    title: 'Webutvikler',
    caption: 'Sommerstudent, Adresseavisen',
    start: new Date('2022-06-13'),
    end: new Date('2022-07-05'),
  },
  {
    title: 'Learning assistant',
    caption: 'TDT4110: Informatikk, grunnkurs',
    start: new Date('2022-07-22'),
  }
]

setActiveSemester(stepperContent);
</script>

<template>
  <div class="about container">
    <h1 class="header" >About me</h1>
    <InfoCard center-content title="Ian Philip Eglin" image="src/assets/img/profile.png" :socials="socials" />
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