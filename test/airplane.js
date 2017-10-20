import assert from 'assert'
import { Airplane, PLANE_STATUS } from "app/engine/airplane.js"

import { configureMockStore } from 'redux-mock-store';
import simulationRedux from 'redux/reducers/index.js'

const store = configureMockStore(simulationRedux)

describe('Airplanes', function() {
  it('can be created', () => {
    store.dispatch(createAirplane({
      name: 'tom',
    }))

    const state = store.getState()

  })
  it('burns fuel in flight', () => {

  })
  it('can takeoff', () => {

  })
  it('can land', () => {

  })
  it('will crash when it runs out of fuel', () => {

  })
  it('will taxi', () => {

  })
});
