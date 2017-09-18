export function createAirplane(airplane) {
  const id = ''
  const turn_created = 0
  return {
    type: "ADD_AIRPLANE",
    airplane: {
      ...airplane,
      id,
      turn_created
    },
  };
}
