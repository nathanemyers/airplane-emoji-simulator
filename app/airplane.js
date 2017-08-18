let airplane = {}

export const PLANE_STATUS = {
  flight: "In Flight",
  taxi: "Taxing",
  takeoff: "Taking Off",
  landing: "Landing",
  crash:  "Crashed",
}

export class Airplane {
  constructor(fuel=100) {
    this._fuel_capacity = fuel
    this._fuel = fuel
    this._status = PLANE_STATUS.taxi
  }

  get fuel() {
    return this._fuel
  }

  get status() {
    return this.status
  }

  tick() {
    this._fuel = this._fuel - 1
  }
}
