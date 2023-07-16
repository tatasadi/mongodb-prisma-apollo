import _ from "lodash"

export default {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args)
    },
    sessionById: (parents, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id)
    },
    speakers: (parent, args, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakers(args)
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
      return dataSources.speakerAPI.getSpeakerById(id)
    },
  },
  Session: {
    speakers: async (session, args, { dataSources }, info) => {
      const speakers = await dataSources.speakerAPI.getSpeakers()
      return speakers.filter((speaker) => {
        return (
          _.filter(session.speakers, { referenceId: speaker.referenceId })
            .length > 0
        )
      })
    },
  },
  Speaker: {
    sessions: async (speaker, args, { dataSources }, info) => {
      const sessions = await dataSources.sessionAPI.getSessions()
      return sessions.filter((session) => {
        return (
          _.filter(speaker.sessions, { referenceId: session.referenceId })
            .length > 0
        )
      })
    },
  },
}
