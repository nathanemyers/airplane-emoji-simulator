import cuid from 'cuid'
import { getTurn } from '../selectors/world'
import store from '../../stores/store'

export const LAUNCH_AIRPLANE = "LAUNCH_AIRPLANE"
export function launchAirplane(airplane_id, runway_id) {
  return {
    type: LAUNCH_AIRPLANE,
    airplane_id,
    runway_id,
  };
}

export const LAND_AIRPLANE = "LAND_AIRPLANE"
export function launchAirplane(airplane_id, runway_id) {
  return {
    type: LAND_AIRPLANE,
    airplane_id,
    runway_id,
  };
}

export const ADD_RUNWAY = "ADD_RUNWAY"
export function launchAirplane(airport_id) {
  return {
    type: ADD_RUNWAY,
    airport_id,
  };
}
