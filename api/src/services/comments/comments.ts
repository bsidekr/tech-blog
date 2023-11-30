import type { Prisma } from '@prisma/client'
import type { MutationResolvers, CommentRelationResolvers } from 'types/graphql'

import { requireAuth } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { convertKeysToCamelCase } from 'src/lib/utils'

export const comments = async ({ postId }) => {
  const links = await db.tech_comments_post_links.findMany({
    where: { tech_post_id: postId },
  })
  const comments = await db.tech_comments.findMany({
    where: { OR: links.map((link) => ({ id: link.tech_comment_id })) },
  })
  return comments.map((comment) => convertKeysToCamelCase(comment))
}

interface CreateCommentArgs {
  input: Prisma.commentsUncheckedCreateInput | Prisma.commentsCreateInput
}

export const createComment = async ({ input }: CreateCommentArgs) => {
  const result = await db.tech_comments.create({
    data: input,
  })
  return convertKeysToCamelCase(result)
}

export const deleteComment: MutationResolvers['deleteComment'] = async ({
  id,
}) => {
  requireAuth({ roles: 'moderator' })
  const result = await db.tech_comments.delete({
    where: { id },
  })
  return convertKeysToCamelCase(result)
}

export const Comment: CommentRelationResolvers = {
  post: async (_obj, { root }) => {
    const link = await db.tech_comments_post_links.findFirst({
      where: { tech_comment_id: root?.id },
    })
    const post = await db.tech_posts.findUnique({ where: { id: link.id } })
    return convertKeysToCamelCase(post)
  },
}
