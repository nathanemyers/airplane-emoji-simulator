const initialAirplanesState = {
  airplanes: [],
}

export default (state = initialAirplanesState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case "ADD_AIRPLANE":
      newState.airplanes = state.airplanes.concat(action.airplane)
      return newState;
    default:
      return state;
  }
};
