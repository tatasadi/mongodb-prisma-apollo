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

  async toggleFavoriteSession(id) {
    const session = await prisma.instance.sessions.findUnique({
      where: {
        id,
      },
    })
    if (session) {
      return prisma.instance.sessions.update({
        where: {
          id,
        },
        data: {
          favorite: !session.favorite,
        },
      })
    }
  }

  addSession(session) {
    return prisma.instance.sessions.create({ data: session })
  }
}

export default SessionAPI
