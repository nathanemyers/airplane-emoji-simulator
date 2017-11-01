import uuid from 'uuid/v4'
import { getTurn } from 'redux/selectors/world'
import { getRunway } from 'redux/selectors/runways'
import { getDistance, getAirport } from 'redux/selectors/airports'

import store from 'stores/store'

export const CREATE_AIRPORT = "CREATE_AIRPORT"
export function createAirport(airport) {
  return (dispatch) => {
    const id = uuid() 
    return dispatch( {
      type: CREATE_AIRPORT,
      airport: {
        ...airport,
        id,
      },
    });
  }
}

export const LAUNCH_AIRPLANE = "LAUNCH_AIRPLANE"
export function launchAirplane(airplane_id, runway_id, destination_airport_id) {
  const state = store.getState()
  const airport_id = getRunway(state, runway_id).airport_id
  const airport_name = getAirport(state, airport_id).name
  const destination_airport_name = getAirport(state, destination_airport_id).name
  const distance = getDistance(state, airport_id, destination_airport_id)
  return {
    type: LAUNCH_AIRPLANE,
    airplane_id,
    airport_id,
    airport_name,
    runway_id,
    destination_airport_id,
    destination_airport_name,
    distance,
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
