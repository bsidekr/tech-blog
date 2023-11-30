import type {
  QueryResolvers,
  MutationResolvers,
  PostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { convertKeysToCamelCase } from 'src/lib/utils'

export const posts: QueryResolvers['posts'] = async () => {
  const result = await db.tech_posts.findMany({
    orderBy: { created_at: 'desc' },
  })
  return result.map((d) => convertKeysToCamelCase(d))
}

export const post: QueryResolvers['post'] = async ({ id }) => {
  const result = await db.tech_posts.findUnique({
    where: { id },
  })
  return convertKeysToCamelCase(result)
}

export const createPost: MutationResolvers['createPost'] = async ({
  input,
}) => {
  const result = await db.tech_posts.create({
    data: { ...input },
  })
  return convertKeysToCamelCase(result)
}

export const updatePost: MutationResolvers['updatePost'] = async ({
  id,
  input,
}) => {
  const result = await db.tech_posts.update({
    data: input,
    where: { id },
  })
  return convertKeysToCamelCase(result)
}

export const deletePost: MutationResolvers['deletePost'] = async ({ id }) => {
  const result = await db.tech_posts.delete({
    where: { id },
  })
  return convertKeysToCamelCase(result)
}

export const Post: PostRelationResolvers = {
  comments: (_obj) => {
    return []
  },
  user: (_obj) => ({
    id: 0,
    name: 'mock user',
    email: 'example@email.com',
    roles: [],
  }),
}
