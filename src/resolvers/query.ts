export default {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessions(args)
  },
  sessionById: (parents, { id }, { dataSources }, info) => {
    try {
      return dataSources.sessionAPI.getSessionById(id)
    } catch (error) {
      return {
        code: "ERROR",
        message: "An error occurred",
        token: "j4io3forjisiutrfpi",
      }
    }
  },
  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers(args)
  },
  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerById(id)
  },
}
