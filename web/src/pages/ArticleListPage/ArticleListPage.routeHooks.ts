import { db } from '$api/src/lib/db'

export async function routeParameters() {
  const results = await db.post.findMany({})
  return results.map((article) => ({ id: article.id }))
}
