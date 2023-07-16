import { ApolloServer } from "apollo-server"
import SessionAPI from "./datasources/sessions"

const typeDefs = `
  type Session {
    id: ID!
    title: String!,
    description:String,
    startsAt:String,
    endsAt:String,
    room:String,
    day:String,
    format: String,
    track:String,
    level:String
  }

  type Query {
    sessions:[Session]
  }
`

const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions()
    },
  },
}

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
})
const server = new ApolloServer({ resolvers, typeDefs, dataSources })

server.listen({ port: process.env.Port || 4000 }).then(({ url }) => {
  console.log(`GraphQL running at ${url}`)
})

// async function main() {
//   const sessions = await prisma.sessions.count({
//     //take: 1000,
//   })

//   console.log(sessions)
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
