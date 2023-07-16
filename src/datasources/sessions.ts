import { PrismaClient } from "@prisma/client"
import { DataSource } from "apollo-datasource"

class SessionAPI extends DataSource {
  prisma = new PrismaClient()

  constructor() {
    super()
  }

  initialize(config) {}

  getSessions() {
    return this.prisma.sessions.findMany()
  }
}

export default SessionAPI
