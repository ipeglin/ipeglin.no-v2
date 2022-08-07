<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navigation">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
