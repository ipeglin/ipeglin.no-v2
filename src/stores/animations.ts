import { defineStore } from "pinia";

export const useAnimationStore = defineStore('animation', {
  state: () => ({
    showHeroTitleAnimation: true as boolean,
  }),
  getters: {
    showHeroTitle: (state) => state.showHeroTitleAnimation,
  },
  actions: {
    disableHeroTitle() {
      this.showHeroTitleAnimation = false;
    }
  }
})