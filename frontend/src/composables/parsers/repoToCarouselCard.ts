import type { CarouselCardInterface } from "@/assets/interfaces/CarouselCardInterface";

const parseGitHubRepoToCarouselCard = (repoObject: any): CarouselCardInterface => {
  return {
    title: repoObject.name,
    pushed_at: repoObject.pushed_at,
    link: repoObject.html_url,
  }
}

export const parseGitHubRepoArrayToCarouselCard = (repoArray: any[]): CarouselCardInterface[] => {
  return repoArray.map((repo: any) => {
    return parseGitHubRepoToCarouselCard(repo);
  })
}