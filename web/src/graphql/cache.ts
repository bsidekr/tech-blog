// Cell의 beforeQuery에서 사용
export const cacheFirst = { fetchPolicy: 'cache-first', pollInterval: 600_000 } // 1000 * 60 * 10
export const noCache = { fetchPolicy: 'no-cache' }
