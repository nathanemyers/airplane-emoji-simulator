export const CREATE_AIRPLANE = 'CREATE_AIRPLANE';
export function createAirplane(params) {
  return {
    type: CREATE_AIRPLANE,
    params,
  };
}
