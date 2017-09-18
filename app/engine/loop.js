import store from '../stores/store'
import { createAirplane } from '../redux/actions/airplanes'

let foo = store
let bar = createAirplane

function mainLoop() {
  console.log('loopin')
  debugger
  foo.dispatch(bar({}))
}

export default mainLoop
