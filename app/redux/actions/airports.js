import cuid from 'cuid'

import { getTurn } from 'redux/selectors/world'
import { getRunway } from 'redux/selectors/runways'

import store from 'stores/store'

export const LAUNCH_AIRPLANE = "LAUNCH_AIRPLANE"
export function launchAirplane(airplane_id, runway_id) {
  const state = store.getState()
  const airport_id = getRunway(state, runway_id).airport_id
  return {
    type: LAUNCH_AIRPLANE,
    airplane_id,
    airport_id,
    runway_id,
  };
}

export const LAND_AIRPLANE = "LAND_AIRPLANE"
export function landAirplane(airplane_id, runway_id) {
  const state = store.getState()
  const airport_id = getRunway(state, runway_id).airport_id
  return {
    type: LAND_AIRPLANE,
    airplane_id,
    airport_id,
    runway_id,
  };
}

export const ADD_AIRPLANE_TO_TAXI = "ADD_AIRPLANE_TO_TAXI"
export function addAirplaneToTaxi(airplane_id, airport_id) {
  return {
    type: ADD_AIRPLANE_TO_TAXI,
    airplane_id,
    airport_id,
  };
}
