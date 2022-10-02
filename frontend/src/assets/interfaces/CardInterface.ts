import type { LinkInterface } from "./LinkInterface";

export interface CardInterface {
  title: string,
  description: string,
  tags: string[],
  image?: string,
  link?: LinkInterface
}