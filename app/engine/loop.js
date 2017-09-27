import store from '../stores/store'

import { createAirplane } from '../redux/actions/airplanes'
import { launchAirplane, landAirplane } from '../redux/actions/airports'
import { advanceTurn } from '../redux/actions/world'

import { getAirports, getRunwaysByAirportId } from '../redux/selectors/airports'

export function init() {
  store.dispatch(createAirplane({
    name: 'tom',
  }))
  store.dispatch(createAirplane({
    name: 'dick'
  }))
  store.dispatch(createAirplane({
    name: 'harry'
  }))
  store.dispatch(createAirplane({
    name: 'mason'
  }))
  store.dispatch(createAirplane({
    name: 'katy'
  }))
}

function is_busy(runway) {
  return runway.cooldown > 0
}

export default function mainLoop() {
  const state = store.getState()
  const airports = getAirports(state)
  airports.forEach((airport) => {
    const runways = getRunwaysByAirportId(state, airport.id)
    runways.forEach((runway) => {

      if (airport.taxi_queue.length > 0 && !is_busy(runway)) {
        store.dispatch(launchAirplane(airport.taxi_queue[0], runway.id))
      }

    })
  })
  store.dispatch(advanceTurn())
}
