import React from 'react';

import { createStore } from 'redux'
import { airplaneReducer } from './redux/reducers/airplanes'

let store = createStore(airplaneReducer)

store.subscribe(() => {
  console.log(store.getState())
})

function mainLoop() {

  store.dispatch({
    type: 'ADD_AIRPLANE', 
    params: {
      newPlane: {
        name: 'jerry'
      }
    }
  })

}

mainLoop()

window.setInterval(mainLoop, 5 * 1000)



/////////////////////////////////


//export default class App extends React.Component {
  //constructor(props) {
    //super(props)
  //}

  //render() {
    //return (
      //<div style={{textAlign: 'center'}}>
        //<h1>✈️</h1>
      //</div>
    //);
  //}
//}
