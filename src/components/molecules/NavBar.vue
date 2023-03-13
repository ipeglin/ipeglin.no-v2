<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import { IconMenu2 } from '@tabler/icons-vue';

  const isMobileMenuOpen = ref<boolean>(false);
  const handleMobileMenuToggle = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
</script>

<template>
  <nav class="container">
    <div id="nav-logo-section" class="nav-section">
      <RouterLink class="navlink" to="/">
        <img
          class="nav-logo accent"
          alt="ipeglin logo"
          src="@/assets/img/logo_short.svg"
        />
      </RouterLink>
    </div>
    <div class="menu-icon" @click="handleMobileMenuToggle">
      <IconMenu2 width="28" height="28" />
    </div>
    <div
      id="nav-link-section"
      :class="`nav-section${isMobileMenuOpen ? '__active' : ''}`"
    >
      <RouterLink class="navlink" to="/" @click="handleMobileMenuToggle"
        >Home</RouterLink
      >
      <RouterLink class="navlink" to="/work" @click="handleMobileMenuToggle"
        >Work</RouterLink
      >
      <RouterLink class="navlink" to="/about" @click="handleMobileMenuToggle"
        >About</RouterLink
      >
    </div>
    <!-- <nav>
      <img
        class="navigation__logo accent"
        alt="IPE Logo"
        src="@/assets/img/ipeglin logo short.svg"
      />
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
    </nav> -->
  </nav>
</template>

<style scoped lang="scss">
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;

    .menu-icon {
      display: none;

      @include mobile() {
        display: block;
        cursor: pointer;
      }
    }

    .nav-section {
      display: flex;
      gap: 1rem;

      &__active {
        min-width: 270px;
        z-index: 1000;
      }
    }

    #nav-logo-section {
      height: 75%;
      max-height: 80px;
      padding: 0;

      .navlink {
        height: 100%;

        img {
          height: 100%;
          object-fit: contain;
        }
      }
    }

    #nav-link-section {
      @include mobile() {
        position: absolute;
        right: 0;
        top: 80px;
        background-color: $color-white;
        width: 0px;
        height: calc(100vh - 80px);
        transition: all 0.3s ease-in;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .navlink {
        color: $color-black;
        font-size: 17px;
        padding: 3rem 2rem;

        @include mobile() {
          padding: 1rem 0;
        }
      }

      .router-link-active {
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: $color-accent;
        text-decoration-thickness: 1.5px;
      }
    }
  }
  // .navigation {
  //   overflow: hidden;
  //   position: relative;
  //   top: 0;
  //   padding: 0;
  //   width: 100%;
  //   z-index: 100;

  //   &__logo {
  //     position: absolute;
  //     height: 80%;
  //     padding-top: 7px;
  //     margin-left: 10px;
  //   }

  //   nav > ul {
  //     margin: 0;
  //     padding: 0;
  //     float: right;

  //     li {
  //       display: inline-block;
  //       list-style: none;
  //       padding: 0;
  //       margin: 0;

  //       .navlink {
  //         float: left;
  //         color: $color-black;
  //         text-align: center;
  //         padding: 14px 16px;
  //         font-size: 17px;
  //         text-decoration: none;
  //         margin-right: 10px;
  //       }

  //       .router-link-active {
  //         text-decoration: underline;
  //         text-underline-offset: 5px;
  //         text-decoration-color: $color-accent;
  //         text-decoration-thickness: 1.5px;
  //       }
  //     }
  //   }
  // }
</style>
