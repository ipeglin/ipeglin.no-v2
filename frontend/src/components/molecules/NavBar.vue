<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navigation container">
    <nav>
      <img class="navigation__logo accent" src="@/assets/img/ipeglin logo short.svg" />
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
    overflow: hidden;
    position: relative;
    top: 0;
    padding: 0;
    width: 100%;
    z-index: 100;

    &__logo {
      position:absolute;
      height: 80%;
      padding-top: 7px;
      margin-left: 10px;
    }

    nav>ul {
      margin: 0;
      padding: 0;
      float: right;

      li {
        display: inline-block;
        list-style: none;
        padding: 0; 
        margin: 0;
        
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