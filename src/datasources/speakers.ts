import prisma from "../lib/db"
import { DataSource } from "apollo-datasource"

class SpeakerAPI extends DataSource {
  constructor() {
    super()
  }

  initialize(config) {}

  getSpeakers(args) {
    return prisma.instance.speakers.findMany({
      where: args,
      include: {
        sessions: true,
      },
    })
  }

  getSpeakerById(id) {
    return prisma.instance.speakers.findUnique({
      where: {
        id,
      },
    })
  }
}

export default SpeakerAPI
