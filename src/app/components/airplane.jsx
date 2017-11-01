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
        <div className="name">
          { airplane.name }
        </div>
        <ul className="info">
          <li>
            <span>
              { EMOJI.BARREL }: { airplane.fuel }
            </span>
          </li>
          <li>
            <span>
              Status: { airplane.status }
            </span>
          </li>
          <li>
            <span>
              Outbound: { airplane.outbound_airport_id }
            </span>
          </li>
          <li>
            <span>
              Inbound: { airplane.inbound_airport_id }
            </span>
          </li>
          <li>
            <span>
              Travel Remaining: { airplane.travel_remaining }
            </span>
          </li>
        </ul>
        <ul>
        </ul>
      </div>
    );
  }
}
