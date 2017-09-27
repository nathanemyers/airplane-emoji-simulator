import cuid from 'cuid'
import { getTurn } from 'redux/selectors/world'
import store from 'stores/store'

export const LAUNCH_AIRPLANE = "LAUNCH_AIRPLANE"
export function launchAirplane(airplane_id, runway_id) {
  return {
    type: LAUNCH_AIRPLANE,
    airplane_id,
    runway_id,
  };
}

export const LAND_AIRPLANE = "LAND_AIRPLANE"
export function landAirplane(airplane_id, runway_id) {
  return {
    type: LAND_AIRPLANE,
    airplane_id,
    runway_id,
  };
}

export const ADD_RUNWAY = "ADD_RUNWAY"
export function addRunway(airport_id) {
  return {
    type: ADD_RUNWAY,
    airport_id,
  };
}

export const ADD_AIRPLANE_TO_TAXI = "ADD_AIRPLANE_TO_TAXI"
export function addAirplaneToTaxi(airplane_id) {
  return {
    type: ADD_AIRPLANE_TO_TAXI,
    airplane_id,
  };
}
