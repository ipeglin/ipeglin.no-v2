<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from './components/molecules/NavBar.vue';
  import Footer from './components/molecules/Footer.vue';
  import { onBeforeMount } from 'vue';
  import { useGitHubStore } from './stores/github';
  import axios from 'axios';
  import { storeToRefs } from 'pinia';
  import { ref, getDownloadURL, listAll } from "firebase/storage";
  import { storage } from '@/firebase';

  const githubStore = useGitHubStore();
  const { repositories, followers, repoImages } = storeToRefs(githubStore);

  onBeforeMount(async () =>  {
    try {
      console.info('Fetching repositories from GitHub API')
      const data = await axios.get('https://api.github.com/users/ipeglin/repos');
      repositories.value = data.data;
    } catch (error) {
      console.error(error);
    };

    try {
      console.info('Fetching followers from GitHub API')
      const data = await axios.get('https://api.github.com/users/ipeglin/followers');
      followers.value = data.data;
    } catch (error) {
      console.error(error);
    }

    if (Object.keys(repoImages.value).length  !== 0) return console.info('Images have allready been fetched');

      console.info('Fetching repo images from database')

      // Create a reference to the file we want to download
      // const storage = getStorage();
      const listRef = ref(storage, 'images/repos');

      const repoNames = await repositories.value.map((repo: any) => repo.name);

      await listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            const imageName = itemRef.name.replace(/\.[^/.]+$/, "");
            if (repoNames.includes(imageName)) {
              getDownloadURL(itemRef)
                .then((url) => repoImages.value[imageName] = url);
            }
          })
        })
        .catch((error) => {
          console.error(error);
        });
  });

  // onBeforeMount(async () => {
  //   await githubStore.fetchRepositories();
  //   await githubStore.fetchFollowers();
  //   await githubStore.fetchRepoImages();
  // });
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
