export default class Runway {
  constructor(name="runway01") {
    this._name = name
    this._busy = false
  }

  get name() {
    return this._name
  }

  get busy() {
    return this._busy
  }
  set busy(busy) {
    this._busy = busy
  }
}
