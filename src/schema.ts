export default `
type Query {
  sessions(
    id: ID
    referenceId: Int
    title: String,
    description: String,
    startsAt: String,
    endsAt: String,
    room: Room,
    day: String,
    format: String,
    track: String,
    level: String
  ):[Session]
  sessionById(id: ID): SessionOrError
  speakers(
    id: ID
    referenceId: String
    bio: String
    name: String
  ): [Speaker]
  speakerById(id: ID): Speaker
}

union SessionOrError = Session | Error

type Error {
  code: String
  message: String
  token: String
}

enum Room {
  EUROPA
  SOL
  SATURN
  JUPITER
  EARTH
  MERCURY
  MARS
  PLUTO
  URANUS
  VENUS
  NEPTUNE
  GANYMEDE
  IO
  TITAN
  CALLISTO
}

type Mutation {
  toggleFavoriteSession(id: ID): Session
  addNewSession(session: SessionInput): Session
}

type Session {
  id: ID!    
  referenceId: Int!
  title: String,
  description: String,
  startsAt: String,
  endsAt: String,
  room: Room,
  day: String,
  format: String,
  track: String,
  level: String,
  favorite: Boolean,
  speakers: [Speaker]
}

type Speaker {
  id: ID!
  referenceId: String!
  bio: String
  name: String
  sessions: [Session]
}

input SessionInput{
  title: String!,
  referenceId: Int!,
  description: String,
  startsAt: String,
  endsAt: String,
  room: Room,
  day: String,
  format: String,
  track: String,
  level: String,
  favorite: Boolean
}
`
