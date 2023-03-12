<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="container logo-container vertical-offset">
      <div class="footer__logo">
        <img class="white" alt="Ipeglin Logo" src="@/assets/img/logo.svg" />
      </div>
      <p class="light">Student and Developer</p>
    </div>
    <div class="container contact-info vertical-offset">
      <p class="light">Contact</p>
      <p>philip@eglin.no</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
  .light {
    color: $color-font-subtle;
  }

  .vertical-offset {
    padding-top: 100px;
  }

  .footer {
    width: 100%;
    height: 300px;
    margin-top: 50px;
    background: $color-black;
    color: $color-font-light;
    display: flex;
    flex-direction: row;

    .logo-container {
      .footer__logo {
        padding-left: 10px;

        img {
          width: 150px;
          height: 100%;
        }
      }

      p {
        padding-left: 10px;
        margin: 0;
        font-size: 0.815rem;
      }
    }

    .contact-info {
      p:nth-child(1) {
        margin-top: 0;
      }

      p {
        margin: 5px;
      }
    }
  }
</style>
