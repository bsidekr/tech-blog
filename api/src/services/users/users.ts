import type { QueryResolvers, UserRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { convertKeysToCamelCase } from 'src/lib/utils'

export const users: QueryResolvers['users'] = () => {
  return []
}

export const User: UserRelationResolvers = {
  posts: async (_obj) => {
    const posts = await db.tech_posts.findMany()
    return posts.map((post) => convertKeysToCamelCase(post))
  },
}
