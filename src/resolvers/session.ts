import _ from "lodash"

export default {
  // this is not a good idea and in this example I did this because
  // in my database the speakers and sessions are not related to
  // eachother through _id of the mongodb but through referenceId
  // the right way to do this, when the data are related through
  // _id from mongodb is to relate data in prisma and let
  // prisma include the speakers in sessions and sessions in speakers
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
