import { defineStore } from "pinia";
import { onUpdated } from "vue";

export const useGitHubStore = defineStore('github', {
  state: () => ({
    repositories: [] as any[],
    followers: [] as any[],
  }),
  getters: {
    numberOfRepos: (state) => state.repositories.length,
    numberOfFollowers: (state) => state.followers.length,
  },
  actions: {
    updateRepositories() {
      fetch("https://api.github.com/users/ipeglin/repos")
        .then((response) => response.json())
        .then((data) => {
          this.repositories = data;
        })
        .catch((error) => console.error(error));
    },
    updateFollowers() {
      fetch("https://api.github.com/users/ipeglin/followers")
        .then((response) => response.json())
        .then((data) => {
          this.followers = data
        })
        .catch((error) => console.error(error));
    },
    updateStore() {
      this.updateRepositories();
      this.updateFollowers();
    }
  }
})