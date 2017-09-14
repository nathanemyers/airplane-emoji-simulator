import { ADD_AIRPLANE } from './airplanes'

const initialAirplanesState = {
  airplanes: [],
}

export default (state = initialAirplanesState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_AIRPLANE:
      return newState;

    default:
      return state;
  }
};
