export const RUNWAY_STATUS = {
  LAUNCH: "Launching",
  LAND: "Landing",
  VACANT: "Vacant",
}

export class Runway {
  constructor(name="runway01") {
    this._name = name
    this._busy = false
    this._status = RUNWAY_STATUS.VACANT
    this._cooldown = 0
  }

  get name() {
    return this._name
  }

  get busy() {
    return this._busy
  }

  get status() {
    return this._status
  }

  land(plane) {
    this._busy = true
    this._cooldown = 2
  }

  launch(plane) {
    this._busy = true
    this._cooldown = 2
  }

  tick() {
    switch (this._status) {
      case RUNWAY_STATUS.LAUNCH:
      case RUNWAY_STATUS.LAND:
        if (this._cooldown < 0) {
          this._status = RUNWAY_STATUS.VACANT
        }
        this._cooldown-- // fix this
        break
      case RUNWAY_STATUS.VACANT:
        break
    }
  }

}
