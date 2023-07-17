import Query from "./resolvers/query"
import Session from "./resolvers/session"
import Speaker from "./resolvers/speaker"
import Mutation from "./resolvers/mutation"

export default {
  Query,
  Session,
  Speaker,
  Mutation,
  Room: {
    EUROPA: "Europa",
    SOL: "Sol",
    SATURN: "Saturn",
    JUPITER: "Jupiter",
    EARTH: "Earth",
    MERCURY: "Mercury",
    MARS: "Mars",
    PLUTO: "Pluto",
    URANUS: "Uranus",
    VENUS: "Venus",
    NEPTUNE: "Neptune",
    GANYMEDE: "Ganymede",
    IO: "Io",
    TITAN: "Titan",
    CALLISTO: "Callisto",
  },
}
