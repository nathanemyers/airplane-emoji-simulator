import React from 'react';
import { connect } from 'react-redux';
import store from './stores/store'

import { createAirplane } from './redux/actions/airplanes'

import { getAirplanes } from './redux/selectors/airplanes'

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

    this.airplanes = props.airplanes
    this.createAirplane = props.createAirplane

    this.timerId = setInterval( this.mainLoop.bind(this), 1 * 1000)
  }

  mainLoop() {
    this.createAirplane({})
    console.info(this.airplanes)
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
