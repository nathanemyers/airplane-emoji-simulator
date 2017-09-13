import React from 'react';
import { connect } from 'react-redux';

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

    props.fetchNotifications()
    this.timerId = setInterval( () => props.fetchNotifications(), 30 * 1000)
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
