import React from 'react';
import {connect} from 'react-redux'

import mainLoop, { init } from './engine/loop'

import Airplane from './components/airplane'

import { getAirplanes } from './redux/selectors/airplanes'
import { getTurn } from './redux/selectors/world'

init()
mainLoop()

window.setInterval(mainLoop, 5 * 1000)

@connect(
  ( state, ownProps ) => ({
    airplanes: getAirplanes(state),
    turn: getTurn(state),
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
    const { airplanes, turn } = this.props

    const rendered_airplanes = airplanes.map((airplane) => (
      <Airplane airplane={ airplane } />
    ))

    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h1>✈️</h1>
          <h3>Turn { turn }</h3>
        </div>
        { rendered_airplanes }
      </div>
    );
  }
}
