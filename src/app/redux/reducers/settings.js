import { SET_SPEED } from 'redux/actions/settings'

const initialSettingsState = {
  turn_speed: 3,
}

export default (state = initialSettingsState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case SET_SPEED:
      newState.turn_speed = action.speed
      return newState;
    default:
      return state;
  }
};
