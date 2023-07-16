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
}
