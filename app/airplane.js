let airplane = {}

const PLANE_STATUS = {
  flight: "In Flight",
  taxi: "Taxing",
  takeoff: "Taking Off",
  landing: "Landing",
  crash:  "Crashed",
}

export default class Airplane {
  constructor(fuel_tank) {
    this.fuel_capacity = fuel_tank
    this.current_fuel = fuel_tank
    this.status = PLANE_STATUS.taxi
  }

  tick() {
    this.current_fuel = this.current_fuel - 1
  }
}
