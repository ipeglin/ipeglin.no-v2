import type { CarouselCardInterface } from "@/assets/interfaces/CarouselCardInterface";

const parseGitHubRepoToCarouselCard = (repoObject: any, repoImageURL: string): CarouselCardInterface => {
  return {
    title: repoObject.name,
    pushed_at: repoObject.pushed_at,
    link: repoObject.html_url,
    image: repoImageURL || '',
  }
}

export const parseGitHubRepoArrayToCarouselCard = (repoArray: any[], repoImages: string[]): CarouselCardInterface[] => {
  return repoArray.map((repo: any) => {
    return parseGitHubRepoToCarouselCard(repo, repoImages[repo.name]);
  })
}