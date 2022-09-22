<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo">
        <img class="white" src="@/assets/img/logo_no_background.png" />
      </div>
      <h1>This is the footer</h1>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .footer {
    width: 100%;
    min-height: 300px;
    height: 10vh;
    margin-top: 100px;
    background: $color-black;
    color: $color-font-light;

    &__logo {

      img {
        width: 100px;
      }
    }  
  }

  .container {

  }
</style>