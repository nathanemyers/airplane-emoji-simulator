import React, { Component, PropTypes } from 'react'
import EMOJI from '../../engine/contants/emoji'

export default class Airplane extends Component {
  //static propTypes = {
    //team: PropTypes.object.isRequired,
  //}

  render() {
    const { airplane } = this.props;

    return (
      <div className="airplane">
        {{ EMOJI.PLANE }}: {{ airplane.name }}
      </div>
    );
  }
}
