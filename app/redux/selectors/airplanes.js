export const getAirplanes = (state) => state.airplanes.airplanes

export const getAirplane = (state, airplane_id) => {
  const planes = getAirplanes(state)
  return planes.find((plane) => plane.id === airplane_id)
}
