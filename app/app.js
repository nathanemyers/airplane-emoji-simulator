import "./airplane"
import "./airport"
import { EMOJI } from "./emoji"

const SPEED = 200 // milliseconds
const TRAFFIC = 3 // Airplanes created once per 3 turns
const DISTANCE = 30
const FUEL = 40


function loop() {
  console.log(`hello ${EMOJI.FANCY_PLANE}`)

  setTimeout(loop, SPEED)
}

loop()
