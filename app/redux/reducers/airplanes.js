import { ADD_AIRPLANE } from 'redux/actions/airplanes'

const initialAirplanesState = {
  airplanes: [],
}

export default const airplanes = (state = initialAirplanesState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_AIRPLANE:
      return newState;

    default:
      return state;
  }
};
