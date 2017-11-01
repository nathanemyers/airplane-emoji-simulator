export const getAirports = (state) => state.airports.airports
export const getAirport = (state, airport_id) => {
  const airports = getAirports(state)
  return airports.find((airport) => airport.id === airport_id)
} 

export const getAirportByName = (state, airport_name) => {
  const airports = getAirports(state)
  return airports.find((airport_name) => airport.name === airport_name)
} 

