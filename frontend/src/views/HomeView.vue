<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';

const handleClick = () => {console.log('Clicked')}
</script>

<template>
  <main>
    <h1>Home view</h1>
    <Button text="Small button" size="sm"/>
    <Button text="Default button"/>
    <Button text="Large button" size="lg"/>
    <Button text="Default button" disabled/>
  </main>
</template>
