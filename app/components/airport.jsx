import React, { Component, PropTypes } from 'react'
import EMOJI from 'engine/constants/emoji'

import Runway from 'components/runway'

export default class Airport extends Component {
  //static propTypes = {
    //team: PropTypes.object.isRequired,
  //}

  render() {
    const { airport } = this.props;

    const runways = airport.runways.map((runway) => (
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
        { runways }
      </div>
    );
  }
}
