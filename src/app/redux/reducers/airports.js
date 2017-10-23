import _ from 'lodash'
import { 
  LAUNCH_AIRPLANE, 
  LAND_AIRPLANE, 
  ADD_AIRPLANE_TO_TAXI,
} from 'redux/actions/airports'
import { ADD_AIRPLANE, } from 'redux/actions/airplanes'
import { ADVANCE_TURN } from 'redux/actions/world'

import { getAirport, getRunway } from 'redux/selectors/airports'

const initialAirportState = {
  airports: [
    {
      id: 0,
      name: "primary",
      taxi_queue: [],
    }
  ],
}

export default (state = initialAirportState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_AIRPLANE_TO_TAXI:
      newState.taxi_queue.push(action.airplane_id)
      return newState;
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
