export const CREATE_AIRPLANE = 'CREATE_AIRPLANE';
export function createAirplane(airplane) {
  const id = ''
  const turn_created = 0
  return {
    type: CREATE_AIRPLANE,
    airplane: {
      ...airplane,
      id,
      turn_created
    },
  };
}
