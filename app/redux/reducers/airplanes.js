import { ADD_AIRPLANE } from 'redux/actions/airplanes'

const initialAirplanesState = {
  airplanes: [],
}

export default (state = initialAirplanesState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    // Double Duty Action, appears also in airports reducer
    case ADD_AIRPLANE:
      newState.airplanes.push(action.airplane)
      return newState;
    default:
      return state;
  }
};
