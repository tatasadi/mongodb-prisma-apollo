import { PrismaClient } from "@prisma/client"
import { ApolloServer } from "apollo-server"

const prisma = new PrismaClient()

// TODO release Datetime
const typeDefs = `
  type Movie {
    id: ID!
    plot: String
    genres: [String]
    poster: String
    runtime: Int
    cast: [String]
    num_mflix_comments: Int
    title: String!
    fullplot: String
    languages: [String]
    
    directors: [String]
    writers: [String]
    rated: String
    awards: Award
    lastupdated: String
    year: Int
    countries: [String]
    type: String
    imdb: Imdb
  }

  type Award {
    win: Int
    nominations: Int
    text: String
  }
  
  type Imdb {
    rating: Float
    votes: Int
    id: Int
  }

  type Query {
    movies: [Movie]
  }
`

const resolvers = {
  Query: {
    movies: () => {
      return prisma.movies.findMany({
        take: 100,
      })
    },
  },
}

const server = new ApolloServer({ resolvers, typeDefs })

server.listen({ port: process.env.Port || 4000 }).then(({ url }) => {
  console.log(`GraphQL running at ${url}`)
})

// async function main() {
//   const movies = await prisma.movies.findMany({
//     //take: 1000,
//   })

//   console.log(movies)
// }

// main()
//   .catch(async (e) => {
//     console.error(e)
//     process.exit(1)
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })
