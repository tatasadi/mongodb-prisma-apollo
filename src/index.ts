import { ApolloServer } from "apollo-server"
import SessionAPI from "./datasources/sessions"
import typeDefs from "./schema"
import resolvers from "./resolvers"

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
