<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="container text-container">
      <div class="footer__logo">
        <img class="white" src="@/assets/img/ipeglin logo long.svg" />
      </div>
      <p>Student and developer</p>
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

    .text-container {
      // background-color: green;
      height: 100%;

      .footer__logo {
        padding-top: 80px;
        padding-left: 10px;
        img {
          width: 180px;
        }
      }

      p {
        padding-left: 10px;
        margin: 0;
        color: $color-font-subtle;
      }
    }
  }
</style>