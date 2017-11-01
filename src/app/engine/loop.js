import store from 'stores/store'

import { createAirplane } from 'redux/actions/airplanes'
import { launchAirplane, landAirplane, createAirport } from 'redux/actions/airports'
import { addRunway } from 'redux/actions/runways'
import { advanceTurn } from 'redux/actions/world'

import { getAirports, getAirportByName, getRandomDestination } from 'redux/selectors/airports'
import { getAirplane } from 'redux/selectors/airplanes'
import { getRunwaysByAirportId } from 'redux/selectors/runways'

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

  // This is a kind of jank way to init airports and runways.
  // The store is prepopulated with the airports, with fixed ids
  // Ideally I'd use redux-thunk to chain together the airport creation and runway init
  store.dispatch(addRunway(0))
  store.dispatch(addRunway(1))
  store.dispatch(addRunway(2))
}

function is_busy(runway) {
  return runway.cooldown > 0
}

function is_plane_ready_to_land(state, airport) {
  return !!airport.landing_hopper.find((airplane_id) => {
    const airplane = getAirplane(state, airplane_id)
    return (airplane.travel_remaining <= 0)
  })
}

function select_plane_to_land(state, airport) {
  return airport.landing_hopper.find((airplane_id) => {
    const airplane = getAirplane(state, airplane_id)
    return (airplane.travel_remaining <= 0)
  })
}

export default function mainLoop() {
  const state = store.getState()
  const airports = getAirports(state)
  airports.forEach((airport) => {
    const runways = getRunwaysByAirportId(state, airport.id)
    runways.forEach((runway) => {

      if (airport.taxi_queue.length > 0 && !is_busy(runway)) {
        const destination = getRandomDestination(state, airport)
        store.dispatch(launchAirplane(airport.taxi_queue[0], runway.id, destination.id))
        return
      }

      if (is_plane_ready_to_land(state, airport)) {
        const airplane_id = select_plane_to_land(state, airport)
        store.dispatch(landAirplane(airplane_id, runway.id))
        return
      }

    })
  })
  store.dispatch(advanceTurn())
}
