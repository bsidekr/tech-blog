export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    # hashedPassword: String!
    # salt: String!
    # resetToken: String
    # resetTokenExpiresAt: DateTime
    roles: String!
    posts: [Post]!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    # hashedPassword: String!
    # salt: String!
    # resetToken: String
    # resetTokenExpiresAt: DateTime
    roles: String
  }

  input UpdateUserInput {
    name: String
    email: String
    # hashedPassword: String
    # salt: String
    # resetToken: String
    # resetTokenExpiresAt: DateTime
    roles: String
  }
`
