import _ from 'lodash'
import { 
  CREATE_AIRPORT, 
  LAUNCH_AIRPLANE, 
  LAND_AIRPLANE, 
  ADD_AIRPLANE_TO_TAXI,
} from 'redux/actions/airports'
import { ADD_AIRPLANE, } from 'redux/actions/airplanes'
import { ADVANCE_TURN } from 'redux/actions/world'

import { getAirport, getRunway } from 'redux/selectors/airports'

const buildAirport = (airport) => {
  return {
    starting_fuel: 50,
    distance: 35,
    ...airport,
    taxi_queue: [],
  }
}

const initialAirportState = {
  airports: [
    buildAirport({
      id: 0,
      name: 'Chicago',
    }),
    buildAirport({
      id: 1,
      name: 'Denver',
    }),
    buildAirport({
      id: 2,
      name: 'Toronto',
    }),
  ],
}


export default (state = initialAirportState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case CREATE_AIRPORT:
      newState.airports.push(buildAirport(action.airport))
      return newState;
    case ADD_AIRPLANE_TO_TAXI:
      return state
    case ADD_AIRPLANE:
      const airport = newState.airports[0]
      airport.taxi_queue.push(action.airplane.id)
      return newState;
    case LAUNCH_AIRPLANE:
      newState.airports = newState.airports.map(airport => {
        if (airport.id === action.airport_id) {
          _.remove(airport.taxi_queue, (airplane_id) => airplane_id === action.airplane_id )
        }
        return airport
      })
      return newState;
    case LAND_AIRPLANE:
      return newState;
    case ADVANCE_TURN:
      return newState;
    default:
      return state;
  }
};
