type SortingOrders = 'asc' | 'desc'

export const sortGitHubReposByPushedAt = (repoArray: any[], order: SortingOrders = 'desc'): any[] => {
  return repoArray.sort((a: any, b: any) => {
    if (order === 'desc')
      return (a.pushed_at < b.pushed_at) ? 1 : ((a.pushed_at > b.pushed_at) ? -1 : 0)
    
    if (order === 'asc')
      return (a.pushed_at < b.pushed_at) ? -1 : ((a.pushed_at > b.pushed_at) ? 1 : 0)

    return 0;
  })
}