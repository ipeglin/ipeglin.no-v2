<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navigation">
    <nav>
      <ul>
        <li>
          <RouterLink class="navlink" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="navlink" to="/work">Work</RouterLink>
        </li>
        <li>
          <RouterLink class="navlink" to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
  .navigation {
    background: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    padding: 0;
    width: 100%;
    z-index: 9;

    nav>ul {
      float: right;

      li {
        display: inline-block;
        list-style: none;
        
      .navlink {
        float: left;
        color: $color-black;
        text-align: center;
        padding: 14px 16px;
        font-size: 17px;
        text-decoration: none;
        margin-right: 10px;
      }

      .router-link-active {
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: $color-accent;
        text-decoration-thickness: 1.5px;
      }
      }
    }
  }
</style>