<template>
  <div class="card">  
    <div class="card__image">
      <img class="card__image__asset" src="https://img.freepik.com/free-vector/business-people-working-project-flat-icon_1262-18770.jpg?w=1060&t=st=1665266357~exp=1665266957~hmac=c3f32da600bcd5a7ba29231a96e4b547b804fd6bdfd6aeac3b099d428a3e4a9d" />
    </div>
    <div class="card-content">
      <div class="card-content__title">
        <!-- <a v-if="props.content.link" :href="props.content.link.value" target="_blank"><h3 class="truncate">{{props.content.title}}</h3></a> -->
        <h3 class="truncate" />
      </div>
      <div class="card-content__description truncate" />
      <div class="card-content__tags">
        <span class="card-content__tags__pill" />
        <span class="card-content__tags__pill" />
        <span class="card-content__tags__pill" />
      </div>
    </div>
    <div class="card__link">
      <a class="card__link__anchor" href="#" target="_blank" />
        <!-- <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="15" y1="16" x2="19" y2="12"></line>
          <line x1="15" y1="8" x2="19" y2="12"></line>
        </svg> -->
    </div>  
  </div>  
</template>

<style scoped lang="scss">
.card {
    &-content {
      &__title {
        width: 60%;
      }
    }
  }
</style>