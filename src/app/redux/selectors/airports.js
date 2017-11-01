export const getAirports = (state) => state.airports.airports
export const getAirport = (state, airport_id) => {
  const airports = getAirports(state)
  return airports.find((airport) => airport.id === airport_id)
} 

export const getAirportByName = (state, airport_name) => {
  const airports = getAirports(state)
  return airports.find((airport_name) => airport.name === airport_name)
} 

export const getDistance = (state, airport_A_id, airport_B_id) => {
  // TODO actually calculate distance between targets
  const airport_B = getAirport(state, airport_B_id)
  return airport_B.distance
}

export const getRandomDestination = (state, airport) => {
  const airports = getAirports(state)

  let random_airport = airports[Math.floor(Math.random()*airports.length)]
  while (random_airport.id === airport.id) {
    random_airport = airports[Math.floor(Math.random()*airports.length)]
  }
  
  return random_airport
}
