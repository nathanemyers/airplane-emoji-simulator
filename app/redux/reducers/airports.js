import cuid from 'cuid'
import { LAUNCH_AIRPLANE, LAND_AIRPLANE, ADD_RUNWAY } from './airports'

const initialAirportState = {
  airports: [
    {
      id: 0,
      name: "primary",
      taxi_queue: [],
      runways: [],
    }
  ],
}

function createRunway() {
  return {
    id: cuid(),
    cooldown: 0,
  }
}

export default (state = initialAirportState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case LAUNCH_AIRPLANE:
      newState.runways = state.ruways.map((runway) => {
        if (runway.id === action.runway_id) {
          runway.cooldown = 4
        }
        return runway
      })
      return newState;
    case LAND_AIRPLANE:
      newState.runways = state.ruways.map((runway) => {
        if (runway.id === action.runway_id) {
          runway.cooldown = 2
        }
        return runway
      })
      return newState;
    case ADD_RUNWAY:
      const runway = createRunway()
      newState.runways.push(runway)
      return newState;
    default:
      return state;
  }
};
