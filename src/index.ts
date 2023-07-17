import { ApolloError, ApolloServer } from "apollo-server"
import SessionAPI from "./datasources/sessions"
import SpeakerAPI from "./datasources/speakers"
import typeDefs from "./schema"
import resolvers from "./resolvers"

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
})

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources,
  //debug: false,
  formatError: (err) => {
    if (err.extensions.code === "INTERNAL_SERVER_ERROR") {
      return new ApolloError("We are having some trouble", "ERROR", {
        token: "uniquetoken",
      })
    }
    return err
  },
})

server.listen({ port: process.env.Port || 4000 }).then(({ url }) => {
  console.log(`GraphQL running at ${url}`)
})

// async function main() {
//   const sessions = await new SpeakerAPI().getSpeakers({
//     referenceId: "4267f984-e2b3-48a3-bfdf-f2f67e65c193",
//   })

//   console.log(sessions)
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {})
