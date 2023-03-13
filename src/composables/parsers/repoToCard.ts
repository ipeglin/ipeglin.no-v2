import type { CardInterface } from "@/assets/interfaces/CardInterface";
import { reduceStringArrayToLengthLimit } from "./arrays";

export const parseGitHubRepoToCard = (repoObject: any, imageUrl): CardInterface => {
  return {
    title: repoObject.name,
    description: repoObject.description,
    tags: reduceStringArrayToLengthLimit(repoObject.topics, 20),
    link: {
      name: 'View',
      value: repoObject.html_url
    },
    image: imageUrl,
  }
}

export const parseGitHubRepoArrayToCard = (repoArray: any[], repoImages = {}): CardInterface[] => {
  return repoArray.map((repo: any) => {
    return parseGitHubRepoToCard(repo, repoImages[repo.name] || '');
  })
}