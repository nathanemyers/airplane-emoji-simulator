import React from 'react';

import { createAirplane } from './redux/actions/airplanes'
import { advanceTurn } from './redux/actions/world'
import store from './stores/store'

store.dispatch(createAirplane({
  name: 'tom',
}))
store.dispatch(createAirplane({
  name: 'dick'
}))
store.dispatch(createAirplane({
  name: 'harry'
}))
store.dispatch(createAirplane({
  name: 'mason'
}))
store.dispatch(createAirplane({
  name: 'katy'
}))
function mainLoop() {

  store.dispatch(advanceTurn())
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
