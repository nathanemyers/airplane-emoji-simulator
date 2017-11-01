import { ADD_RUNWAY } from 'redux/actions/runways'
import { LAUNCH_AIRPLANE, LAND_AIRPLANE } from 'redux/actions/airports'
import { ADVANCE_TURN } from 'redux/actions/world'

function tickRunway(runway) {
  if (runway.cooldown > 0) {
    runway.cooldown--
  }
  return runway
}

const initialRunwayState = {
  runways: []
}

export default (state = initialRunwayState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_RUNWAY:
      newState.runways.push(action.runway)
      return newState;
    case LAUNCH_AIRPLANE:
      newState.runways = state.runways.map(runway => {
        if (runway.id === action.runway_id) {
          runway.cooldown = 4
          return runway
        }
        return runway
      })
      return newState;
    case LAND_AIRPLANE:
      newState.runways = state.runways.map(runway => {
        if (runway.id === action.runway_id) {
          runway.cooldown = 2
          return runway
        }
        return runway
      })
      return newState;
    case ADVANCE_TURN:
      newState.runways = state.runways.map(runway => tickRunway(runway))
      return newState;
    default:
      return state;
  }
};
