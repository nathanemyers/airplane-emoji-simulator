import cuid from 'cuid'
import { getTurn } from 'redux/selectors/world'
import { PLANE_STATUS } from 'constants/airplane'
import store from 'stores/store'

export const ADD_AIRPLANE = "ADD_AIRPLANE"
export function createAirplane(airplane) {
  const id = cuid() 
  const turn_created = getTurn(store.getState()) 
  return {
    type: ADD_AIRPLANE,
    airplane: {
      fuel: 100,
      status: PLANE_STATUS.TAXI,
      ...airplane,
      id,
      turn_created
    },
  };
}
