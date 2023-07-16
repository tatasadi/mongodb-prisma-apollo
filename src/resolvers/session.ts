import _ from "lodash"

export default {
  speakers: async (session, args, { dataSources }, info) => {
    const speakers = await dataSources.speakerAPI.getSpeakers()
    return speakers.filter((speaker) => {
      return (
        _.filter(session.speakers, { referenceId: speaker.referenceId })
          .length > 0
      )
    })
  },
}
