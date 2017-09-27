import React, { Component, PropTypes } from 'react'
import EMOJI from 'engine/constants/emoji'

export default class Airplane extends Component {
  //static propTypes = {
    //team: PropTypes.object.isRequired,
  //}

  render() {
    const { airplane } = this.props;
    const plane_emoji = EMOJI.PLANE

    return (
      <div className="airplane">
        { plane_emoji }: { airplane.name }
      </div>
    );
  }
}
