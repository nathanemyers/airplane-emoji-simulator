import React, { Component, PropTypes } from 'react'
import EMOJI from 'constants/emoji'
import Cooldown from 'components/cooldown'

export default class Runway extends Component {
  //static propTypes = {
    //runway: PropTypes.object.isRequired,
  //}

  render() {
    const { runway } = this.props;

    return (
      <div className="runway">
        <div className="emoji">
          { EMOJI.RUNWAY }
        </div>
        <ul>
          <li>Cooldown: { runway.cooldown === 0 ? 'READY' : runway.cooldown }</li>
        </ul>
      </div>
    );
  }
}
