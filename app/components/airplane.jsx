import React, { Component, PropTypes } from 'react'
import EMOJI from 'constants/emoji'

export default class Airplane extends Component {
  //static propTypes = {
    //team: PropTypes.object.isRequired,
  //}

  render() {
    const { airplane } = this.props;

    return (
      <div className="airplane">
        <div className="emoji">
          { EMOJI.PLANE }
        </div>
        <ul>
          <li>Name: { airplane.name }</li>
          <li>Fuel: { airplane.fuel }</li>
        </ul>
      </div>
    );
  }
}
