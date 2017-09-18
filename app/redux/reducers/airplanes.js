const initialAirplanesState = {
  airplanes: [],
}

export const airplaneReducer = (state = initialAirplanesState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "ADD_AIRPLANE":
      newState.airplanes = state.airplanes.concat(action.params.newPlane)
      return newState;
    default:
      return state;
  }
};
