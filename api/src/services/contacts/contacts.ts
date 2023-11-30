import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { convertKeysToCamelCase } from 'src/lib/utils'

export const contacts: QueryResolvers['contacts'] = async () => {
  const result = await db.tech_contacts.findMany()
  return result.map((d) => convertKeysToCamelCase(d))
}

export const contact: QueryResolvers['contact'] = async ({ id }) => {
  const result = await db.tech_contacts.findUnique({
    where: { id },
  })
  return convertKeysToCamelCase(result)
}

export const createContact: MutationResolvers['createContact'] = async ({
  input,
}) => {
  validate(input.email, 'email', { email: true })
  const result = await db.tech_contacts.create({
    data: input,
  })
  return convertKeysToCamelCase(result)
}
