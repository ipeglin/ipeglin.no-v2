import { defineStore } from "pinia";
import axios from 'axios';

export const useGitHubStore = defineStore('github', {
  state: () => ({
    repositories: [] as any[],
    currentRepository: {} as any,
    followers: [] as any[],
  }),
  getters: {
    repos: (state) => state.repositories,
    repo: (state) => state.currentRepository,
    numberOfRepos: (state) => state.repositories.length,
    numberOfFollowers: (state) => state.followers.length,
  },
  actions: {
    async fetchRepositories() {
      try {
        const data = await axios.get('https://api.github.com/users/ipeglin/repos');
        this.repositories = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchFollowers() {
      try {
        const data = await axios.get('https://api.github.com/users/ipeglin/followers');
        this.followers = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRepository(repoName: string) {
      try {
        const data = await axios.get(`https://api.github.com/repos/ipeglin/${repoName}`)
        this.currentRepository = data.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
})