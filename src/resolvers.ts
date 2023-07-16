export default {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args)
    },
    sessionById: (parents, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id)
    },
  },
}
