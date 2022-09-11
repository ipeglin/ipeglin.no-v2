<script setup lang="ts">
import Card from "../components/molecules/Card.vue";
</script>

<template>
  <h1>Work page</h1>
  <Card title="Card title" content="Lorem ipsum" :link="{name: 'A link', value: '#'}" image="src/assets/img/profile.png" />
  <Card title="Card title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis dolor eros. Cras condimentum, arcu id commodo euismod, augue ante pulvinar augue, sed ultricies nisl." :link="{name: 'A link', value: '#'}" />
</template>