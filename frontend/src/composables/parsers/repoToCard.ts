import type { CardInterface } from "@/assets/interfaces/CardInterface";
import { reduceStringArrayToLengthLimit } from "./arrays";


export const parseGitHubRepoToCard = (repoObject: any): CardInterface => {
  return {
    title: repoObject.name,
    description: repoObject.description,
    tags: reduceStringArrayToLengthLimit(repoObject.topics, 20),
    link: {
      name: 'View',
      value: repoObject.html_url
    },
  }
}

export const parseGitHubRepoArrayToCard = (repoArray: any[]): CardInterface[] => {
  return repoArray.map((repo: any) => {
    return parseGitHubRepoToCard(repo);
  })
}