import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  const movies = await prisma.movies.findMany({
    //take: 1000,
  })

  console.log(movies)
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
