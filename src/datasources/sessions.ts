import { PrismaClient } from "@prisma/client"
import { DataSource } from "apollo-datasource"

class SessionAPI extends DataSource {
  prisma = new PrismaClient()

  constructor() {
    super()
  }

  initialize(config) {}

  getSessions(args) {
    return this.prisma.sessions.findMany({
      where: args,
    })
  }

  getSessionById(id) {
    return this.prisma.sessions.findUnique({
      where: {
        id,
      },
    })
  }
}

export default SessionAPI
