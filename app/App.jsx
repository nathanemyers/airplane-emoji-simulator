import React from 'react';
import { connect } from 'react-redux';
import store from './stores/configure-store.js'

import { createAirplane } from './redux/actions/airplanes'

import { getAirplanes } from './redux/selectors/airplanes'

const mainLoop = () => {
  console.info('Loop Start')
  store.dispatch(createAirplane({}))
}

@connect(
  ( state, ownProps ) => ({
    airplanes: getAirplanes(state),
  }),
  ( dispatch, ownProps ) => ({
    createAirplane: (airplane) => dispatch(createAirplane(airplane)),
  })
)
export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.timerId = setInterval( mainLoop, 1 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>✈️</h1>
      </div>
    );
  }
}
