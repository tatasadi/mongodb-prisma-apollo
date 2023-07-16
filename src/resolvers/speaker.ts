import _ from "lodash"

export default {
  sessions: async (speaker, args, { dataSources }, info) => {
    const sessions = await dataSources.sessionAPI.getSessions()
    return sessions.filter((session) => {
      return (
        _.filter(speaker.sessions, { referenceId: session.referenceId })
          .length > 0
      )
    })
  },
}
