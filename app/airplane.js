let airplane = {}

export const PLANE_STATUS = {
  flight: "In Flight",
  taxi: "Taxing",
  takeoff: "Taking Off",
  landing: "Landing",
  crash:  "Crashed",
}

export default class Airplane {
  constructor(fuel) {
    this.fuel_capacity = fuel
    this.fuel = fuel
    this.status = PLANE_STATUS.taxi
  }

  get fuel() {
    return this.fuel
  }

  get status() {
    return this.status
  }

  tick() {
    this.fuel = this.fuel - 1
  }
}
