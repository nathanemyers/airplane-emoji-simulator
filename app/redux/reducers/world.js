import { ADVANCE_TIME } from 'redux/actions/world'

const initialWorldState = {
  turn: 0,
}

export default const world = (state = initialWorldState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADVANCE_TIME:
      return newState;

    default:
      return state;
  }
};
