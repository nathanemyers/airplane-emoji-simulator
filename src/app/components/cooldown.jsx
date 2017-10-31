import React, { Component, PropTypes } from 'react'
import EMOJI from 'constants/emoji'

class Cooldown extends Component {
  render() {
    const { cooldown } = this.props;

    const cooldown_display = Array(cooldown).fill(
      <div className="cooldown-pip"/>
    )

    return (
      <div className="cooldown">
        { cooldown_display }
      </div>
    );
  }
}

Cooldown.propTypes = {
  cooldown: PropTypes.number.isRequired,
}

export default Cooldown
