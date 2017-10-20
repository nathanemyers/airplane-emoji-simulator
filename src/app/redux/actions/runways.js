import cuid from 'cuid'
import { getTurn } from 'redux/selectors/world'
import store from 'stores/store'

export const ADD_RUNWAY = "ADD_RUNWAY"
export function addRunway(airport_id) {
  const id = cuid() 
  const turn_created = getTurn(store.getState()) 
  return {
    type: ADD_RUNWAY,
    runway: {
      id,
      airport_id,
      cooldown: 0,
    }
  };
}
