import type { APIGatewayEvent, Context } from 'aws-lambda'
import { Feed } from 'feed'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

const POST_NUMS = 15

export const handler = async (event: APIGatewayEvent, _context: Context) => {
  logCurEvent(event)
  const posts = await getRecentPosts(POST_NUMS)
  const feed = generateFeed()
  addPostsToFeed(posts, feed)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
    body: feed.rss2(),
  }
}

const logCurEvent = (event: APIGatewayEvent) => {
  logger.info(`${event.httpMethod} ${event.path}: rss function`)
}

const getRecentPosts = (num: number) => {
  return db.post.findMany({
    take: num,
    orderBy: { createdAt: 'desc' },
    include: { user: true },
  })
}

const generateFeed = () => {
  return new Feed({
    title: '비사이드코리아 기술블로그',
    description: '',
    id: 'tech.bside.ai',
    link: 'tech.bside.ai',
    language: 'ko-KR',
    image: 'https://cdn.bside.ai/product_dartk_ebf8eeb1e3.webp',
    favicon: 'https://bside-tech-blog.netlify.app/favicon.png',
    copyright: 'All rights reserved 2023, Bside Korea',
  })
}

type postItems = {
  id: number
  body: string
  createdAt: Date
  thumbnail: string
  title: string
  user: {
    name: string
  }
}

const addPostsToFeed = (posts: postItems[], feed: Feed) => {
  posts.map((post) =>
    feed.addItem({
      title: post.title,
      id: `tech.bside.ai/articles/${post.id}`,
      link: `tech.bside.ai/articles/${post.id}`,
      content: post.body.slice(0, 100),
      author: [
        {
          name: post.user.name,
        },
      ],
      date: post.createdAt,
      image: post.thumbnail,
    })
  )

  feed.addCategory('Technology')
}
