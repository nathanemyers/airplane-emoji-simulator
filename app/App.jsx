import React from 'react';
import {connect} from 'react-redux'

import mainLoop, { init } from './engine/loop'

import Airplane from './components/airplane'
import { getAirplanes } from './redux/selectors/airplanes'

init()
mainLoop()

window.setInterval(mainLoop, 5 * 1000)


/////////////////////////////////


@connect(
  ( state, ownProps ) => ({
    airplanes: getAirplanes(state),
  }),
  dispatch => ({
    //fetchTournaments: () => dispatch(fetchTournaments({
      //state: ['pending', 'underway'],
      //tournament_type: ['NORMAL'],
    //}))
  })
)
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { airplanes } = this.props

    const rendered_airplanes = airplanes.map((airplane) => (
      <Airplane airplane={ airplane } />
    ))

    return (
      <div style={{textAlign: 'center'}}>
        <h1>✈️</h1>
        {{ rendered_airplanes }}
      </div>
    );
  }
}
