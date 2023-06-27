// Cell의 beforeQuery에서 사용
export const cacheFirst = {
  fetchPolicy: 'cache-and-network',
  pollInterval: 86_400_000,
} // 1000 * 60 * 60 * 24
export const noCache = { fetchPolicy: 'no-cache' }
