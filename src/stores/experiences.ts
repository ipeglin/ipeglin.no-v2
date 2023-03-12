import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
// import { db } from '@/firebase';

export const useExperienceStore = defineStore('experiences', {
  state: () => ({
    educationExperiences: [] as any[],
    workExperiences: [] as any[],
  }),
  getters: {
    education: (state) => state.educationExperiences,
    work: (state) => state.workExperiences,
  },
  actions: {
    async fetchEducation() {
      console.log('Fetching education experiences')
      if (this.education.length !== 0) return;

      const querySnapshot = await getDocs(collection(db, "education"));
      querySnapshot.forEach((doc) => {
        this.educationExperiences.push(doc.data());
      });
    },
    async fetchWork() {
      console.log('Fetching work experiences')
      if (this.work.length !== 0) return;

      const querySnapshot = await getDocs(collection(db, "work"));
      querySnapshot.forEach((doc) => {
        this.workExperiences.push(doc.data());
      });
    },
    fetchExperiences() {
      this.fetchEducation();
      this.fetchWork();
    }
  }
})