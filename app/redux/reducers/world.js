import { ADVANCE_TIME } from '../actions/world'

const initialWorldState = {
  turn: 0,
}

export default (state = initialWorldState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADVANCE_TIME:
      newState.turn = state.turn + 1
      return newState;

    default:
      return state;
  }
};
