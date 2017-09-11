import { Airplane } from "./airplane"
import Airport from "./airport"
import { EMOJI } from "./emoji"

const SPEED = 200 // milliseconds
const TRAFFIC = 3 // Airplanes created once per 3 turns
const DISTANCE = 30
const FUEL = 40

let turn = 0
let airport = new Airport()
let taxi_queue = []
let planes = []

function loop() {
  turn = turn + 1

  // Generate Planes
  if (turn % TRAFFIC === 0) {
    let new_plane = new Airplane(FUEL, DISTANCE)
    taxi_queue.push(new_plane)
    console.log(`[${turn}]: ${EMOJI.FANCY_PLANE}   ${new_plane.name} is taxiing`)
  }

  // Takeoff
  if (taxi_queue.length > 0) {
    let runway = airport.get_open_runway()
    if (runway) {
      let plane = taxi_queue.shift()
      runway.busy = true
      plane.takeoff(runway)
    }
  }

  planes.forEach((plane) => {
    plane.tick()
  })

  setTimeout(loop, SPEED)
}

loop()
