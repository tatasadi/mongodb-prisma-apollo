import { ApolloError } from "apollo-server"
import _ from "lodash"

export default {
  // this is not a good idea and in this example I did this because
  // in my database the speakers and sessions are not related to
  // eachother through _id of the mongodb but through referenceId
  // the right way to do this, when the data are related through
  // _id from mongodb is to relate data in prisma and let
  // prisma include the speakers in sessions and sessions in speakers
  sessions: async (speaker, args, { dataSources }, info) => {
    try {
      const sessions = await dataSources.sessionAPI.getSessions()
      return sessions.filter((session) => {
        return (
          _.filter(speaker.sessions, { referenceId: session.referenceId })
            .length > 0
        )
      })
    } catch (error) {
      return new ApolloError("Unable to retrieve sessions", "SESSIONSERROR", {
        token: "uniquetoken",
      })
    }
  },
}
