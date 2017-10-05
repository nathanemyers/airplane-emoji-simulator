export const getAirports = (state) => state.airports.airports
export const getAirport = (state, airport_id) => {
  const airports = getAirports(state)
  return airports.find((airport) => airport.id === airport_id)
} 

