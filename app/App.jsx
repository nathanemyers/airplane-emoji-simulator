import React from 'react';

import { createStore } from 'redux'

const initialAirplanesState = {
  airplanes: [],
}

const airplaneReducer = (state = initialAirplanesState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_AIRPLANE':
      newState.airplanes = state.airplanes.concat(action.params.newPlane)
      return newState;
    default:
      return state;
  }
};

let store = createStore(airplaneReducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'ADD_AIRPLANE', 
  params: {
    newPlane: {
      name: 'tom'
    }
  }
})

store.dispatch({
  type: 'ADD_AIRPLANE', 
  params: {
    newPlane: {
      name: 'jerry'
    }
  }
})



/////////////////////////////////


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>✈️</h1>
      </div>
    );
  }
}
