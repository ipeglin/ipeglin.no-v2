import { defineStore } from "pinia";
import axios from 'axios';
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from '@/firebase';

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
    async fetchRepositories() {
      try {
        console.info('Fetching repositories from GitHub API')
        const data = await axios.get('https://api.github.com/users/ipeglin/repos');
        this.repositories = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchFollowers() {
      try {
        console.info('Fetching followers from GitHub API')
        const data = await axios.get('https://api.github.com/users/ipeglin/followers');
        this.followers = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRepository(repoName: string) {
      try {
        console.info('Fetching repository information from GitHub API')
        const data = await axios.get(`https://api.github.com/repos/ipeglin/${repoName}`)
        this.currentRepository = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRepoImages() {
      if (Object.keys(this.repoImages).length  !== 0) return console.info('Images have allready been fetched');

      console.info('Fetching repo images from database')

      // Create a reference to the file we want to download
      // const storage = getStorage();
      const listRef = ref(storage, 'images/repos');

      const repoNames = await this.repos.map((repo: any) => repo.name);

      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            const imageName = itemRef.name.replace(/\.[^/.]+$/, "");
            if (repoNames.includes(imageName)) {
              getDownloadURL(itemRef)
                .then((url) => this.repoImages[imageName] = url);
            }
          })
          this.images;
        })
        .catch((error) => {
          console.error(error);
        })
    },
  }
})