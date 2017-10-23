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
        </ul>
        <ul>
        </ul>
      </div>
    );
  }
}
