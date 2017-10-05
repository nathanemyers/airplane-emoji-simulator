import { ADD_AIRPLANE } from 'redux/actions/airplanes'
import { ADVANCE_TURN } from 'redux/actions/world'
import { PLANE_STATUS } from 'constants/airplane'

function tickAirplane(airplane) {
  if (airplane.status === PLANE_STATUS.FLIGHT ) {
    airplane.fuel--
  }
  if (airplane.fuel < 0) {
    airplane.status = PLANE_STATUS.CRASH
  }
  return airplane
}

const initialAirplanesState = {
  airplanes: [],
}

export default (state = initialAirplanesState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_AIRPLANE:
      newState.airplanes.push(action.airplane)
      return newState;
    case ADVANCE_TURN:
      newState.airplanes = state.airplanes.map(airplane => tickAirplane(airplane))
      return newState;
    default:
      return state;
  }
};
