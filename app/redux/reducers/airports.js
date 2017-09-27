import cuid from 'cuid'
import _ from 'lodash'
import { 
  LAUNCH_AIRPLANE, 
  LAND_AIRPLANE, 
  ADD_RUNWAY, 
  ADD_AIRPLANE_TO_TAXI,
} from 'redux/actions/airports'
import { ADD_AIRPLANE, } from 'redux/actions/airplanes'

import { getAirport, getRunway } from 'redux/selectors/airports'

const initialAirportState = {
  airports: [
    {
      id: 0,
      name: "primary",
      taxi_queue: [],
      runways: [
        {
          id: cuid(),
          cooldown: 0
        },
      ],
    }
  ],
}

function createRunway() {
  return {
    id: cuid(),
    cooldown: 0,
  }
}

// TODO clean this up
function findRunway(state, runway_id) {
  const runways = _.flatten(
    _.concat(
      state.airports.map((airport) => {
        return airport.runways
      })
    )
  )
  return runways.find((runway) => runway.id === runway_id)
}

export default (state = initialAirportState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case LAUNCH_AIRPLANE:
      let launch_runway = findRunway(newState, action.runway_id)
      launch_runway.cooldown = 4
      return newState;
    case LAND_AIRPLANE:
      let land_runway = findRunway(newState, action.runway_id)
      land_runway.cooldown = 2
      return newState;
    case ADD_RUNWAY:
      const runway = createRunway()
      newState.runways.push(runway)
      return newState;
    case ADD_AIRPLANE_TO_TAXI:
      newState.taxi_queue.push(action.airplane_id)
      return newState;
      // Double Duty Action, appears also in airplanes reducer
    case ADD_AIRPLANE:
      const airport = newState.airports[0]
      airport.taxi_queue.push(action.airplane.id)
      return newState;
    default:
      return state;
  }
};
