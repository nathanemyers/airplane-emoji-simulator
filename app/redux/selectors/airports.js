export const getAirports = (state) => state.airports.airports
export const getAirport = (state, airport_id) => {
  const airports = getAirports(state)
  return airports.find((airport) => airport.id === airport_id)
} 

export const getRunwaysByAirportId = (state, airport_id) => {
  const airport = getAirport(state, airport_id)
  return airport.runways
}
export const getAllRunways = (state) => {
  const airports = getAirports(state)
  debugger
  return []
}
export const getRunway = (state, runway_id) => {
  const runways = getAllRunways(state)
  return runways.find((runway) => runway.id === runway_id)
}

