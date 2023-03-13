import { defineStore } from "pinia";

export const useGitHubStore = defineStore('github', {
  state: () => ({
    repositories: [] as any[],
    repoImages: {} as any,
    currentRepository: {} as any,
    followers: [] as any[],
  }),
  getters: {
    repos: (state) => state.repositories,
    repo: (state) => state.currentRepository,
    images: (state) => state.repoImages,
    numberOfRepos: (state) => state.repositories.length,
    numberOfFollowers: (state) => state.followers.length,
  },
  actions: {
    async fetchRepository(repoName: string) {
      if (this.repositories.length === 0) return;

      return this.repositories.filter((repo: any) => repo.name = repoName);
    }
  }
})