import React, { Component, PropTypes } from 'react'
import EMOJI from 'constants/emoji'

export default class Runway extends Component {
  //static propTypes = {
    //team: PropTypes.object.isRequired,
  //}

  render() {
    const { runway } = this.props;

    return (
      <div className="runway">
        <div className="emoji">
          { EMOJI.RUNWAY }
        </div>
        <ul>
          <li>Cooldown: { runway.cooldown }</li>
        </ul>
      </div>
    );
  }
}
