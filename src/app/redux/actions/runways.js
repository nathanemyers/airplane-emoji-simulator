import uuid from 'uuid/v4'
import { getTurn } from 'redux/selectors/world'
import store from 'stores/store'

export const ADD_RUNWAY = "ADD_RUNWAY"
export function addRunway(airport_id) {
  //const id = cuid() 
  const id = uuid() 
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

export function addRunwayByAirportName(airport_name) {
  const id = uuid() 
  const turn_created = getTurn(store.getState()) 
  const airport_id = getAirportByName(store.getState(), airport_name) 
  return {
    type: ADD_RUNWAY,
    runway: {
      id,
      airport_id,
      cooldown: 0,
    }
  };
}
