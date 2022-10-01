import type { CardInterface } from "@/assets/interfaces/CardInterface";


export const parseGitHubRepoToCard = (repoObject: any): CardInterface => {
  return {
    title: repoObject.name,
    description: repoObject.description,
    link: repoObject.html_url,
  }
}

export const parseGitHubRepoArrayToCard = (repoArray: any[]): CardInterface[] => {
  return repoArray.map((repo: any) => {
    return parseGitHubRepoToCard(repo);
  })
}