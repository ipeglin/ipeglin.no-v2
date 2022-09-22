import type { CarouselCardInterface } from "@/assets/interfaces/CarouselCardInterface";

export const parseGitHubRepoToCard = (repoObject: any): CarouselCardInterface => {
  return {
    title: repoObject.name,
    pushed_at: repoObject.pushed_at,
    link: repoObject.html_url,
  }
}

export const parseGitHubRepoArrayToCard = (repoArray: any[]): CarouselCardInterface[] => {
  return repoArray.map((repo: any) => {
    return parseGitHubRepoToCard(repo);
  })
}