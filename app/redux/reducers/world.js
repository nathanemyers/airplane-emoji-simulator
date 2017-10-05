import { ADVANCE_TURN } from 'redux/actions/world'

const initialWorldState = {
  turn: 0,
}

export default (state = initialWorldState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADVANCE_TURN:
      newState.turn = state.turn + 1
      return newState;
    default:
      return state;
  }
};
