import cuid from 'cuid'
import { getTurn } from '../selectors/world'
import store from '../../stores/store'

export function createAirplane(airplane) {
  const id = cuid() 
  const turn_created = getTurn(store.getState()) 
  return {
    type: "ADD_AIRPLANE",
    airplane: {
      ...airplane,
      id,
      turn_created
    },
  };
}
