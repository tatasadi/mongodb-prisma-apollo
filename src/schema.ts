export default `
type Query {
  sessions(
    id: ID
    referenceId: Int
    title: String,
    description:String,
    startsAt:String,
    endsAt:String,
    room:String,
    day:String,
    format: String,
    track:String,
    level:String
  ):[Session]
  sessionById(id: ID): Session
  speakers(
    id: ID
    referenceId: String
    bio: String
    name: String
  ): [Speaker]
  speakerById(id: ID): Speaker
}

type Session {
  id: ID!    
  referenceId: Int!
  title: String!,
  description:String,
  startsAt:String,
  endsAt:String,
  room:String,
  day:String,
  format: String,
  track:String,
  level:String,
  speakers: [Speaker]
}

type Speaker {
  id: ID!
  referenceId: String!
  bio: String
  name: String
  sessions: [Session]
}
`
