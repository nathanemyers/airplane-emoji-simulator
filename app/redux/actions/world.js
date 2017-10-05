import store from 'stores/store'
import { getAirplanes } from 'redux/selectors/airplanes'

export const ADVANCE_TURN = 'ADVANCE_TURN';
export function advanceTurn() {
  return {
    type: ADVANCE_TURN,
  };
}
