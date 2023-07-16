import prisma from "../lib/db"
import { DataSource } from "apollo-datasource"

class SessionAPI extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {}

  getSessions(args) {
    return prisma.instance.sessions.findMany({
      where: args,
    })
  }

  getSessionById(id) {
    return prisma.instance.sessions.findUnique({
      where: {
        id,
      },
    })
  }
}

export default SessionAPI
