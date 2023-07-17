export default {
  toggleFavoriteSession: (parents, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.toggleFavoriteSession(id)
  },
  addNewSession: (parents, { session }, { dataSources }, info) => {
    return dataSources.sessionAPI.addSession(session)
  },
}
