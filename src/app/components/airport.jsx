import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import EMOJI from 'constants/emoji'

import Runway from 'components/runway'

import { getRunwaysByAirportId } from 'redux/selectors/runways'

@connect(
  ( state, ownProps ) => ({
    runways: getRunwaysByAirportId(state, ownProps.airport.id),
  }),
  dispatch => ({
  })
)
export default class Airport extends Component {

  //static propTypes = {
    //airport: PropTypes.object.isRequired,
  //}

  render() {
    const { airport, runways } = this.props;

    const rendered_runways = runways.map((runway) => (
      <Runway runway={ runway } />
    ))

    return (
      <div className="airport">
        <div className="emoji">
          { EMOJI.AIRPORT }
        </div>
        <ul>
          <li>Name: { airport.name }</li>
        </ul>
        { rendered_runways }
      </div>
    );
  }
}
