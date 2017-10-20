export const getAllRunways = (state) => {
  return state.runways.runways
}

export const getRunwaysByAirportId = (state, airport_id) => {
  const runways = getAllRunways(state)
  return runways.filter(runway => runway.airport_id === airport_id)
}

export const getRunway = (state, runway_id) => {
  const runways = getAllRunways(state)
  return runways.find(runway => runway.id === runway_id)
}

