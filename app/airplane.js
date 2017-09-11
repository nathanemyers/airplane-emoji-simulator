let airplane = {}

export const PLANE_STATUS = {
  FLIGHT: "In Flight",
  TAXI: "Taxi",
  TAKEOFF: "Taking Off",
  LANDING: "Landing",
  CRASH: "Crashed",
}

export class Airplane {
  constructor(fuel=100, destination=50, status=PLANE_STATUS.TAXI) {
    this._fuel_capacity = fuel
    this._fuel = fuel
    this._destination = destination
    this._status = status
    this._name = "Stub"
  }

  get fuel() {
    return this._fuel
  }
  get status() {
    return this._status
  }
  get eta() {
    return this._destination
  }
  get name() {
    return this._name
  }
  get takeoff_runway() {
    return this._takeoff_runway
  }

  takeoff(runway) {
    if (this._status = PLANE_STATUS.TAXI) {
      this._status = PLANE_STATUS.TAKEOFF
      this._takeoff_runway = runway
    }
  }

  tick() {
    switch (this._status) {
      case PLANE_STATUS.FLIGHT:
        this._fuel = this._fuel - 1

        if (this._destination > 0) {
          this._destination = this._destination - 1
        }

        if (this._fuel === 0) {
          this._status = PLANE_STATUS.CRASH
        }
        break
      case PLANE_STATUS.TAXI:
        break
      case PLANE_STATUS.TAKEOFF:
        this._status = PLANE_STATUS.FLIGHT
        this._takeoff_runway.busy = false
        break
      case PLANE_STATUS.LANDING:
        this._status = PLANE_STATUS.TAXI
        break
      case PLANE_STATUS.CRASH:
        break
    }
  }
}
