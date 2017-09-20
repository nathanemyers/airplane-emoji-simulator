import React from 'react';

import mainLoop, { init } from './engine/loop'

init()
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
