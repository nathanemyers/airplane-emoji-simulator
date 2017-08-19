import Runway from './runway'

export default class Airport {
  constructor(name="Airport") {
    this._name = name
    this._runways = []
    this.add_runway()
  }

  get runway_count() {
    return this._runways.length
  }

  add_runway(name) {
    this._runways.push(new Runway(name))
  }

  get_open_runway() {
    for (let runway in this._runways) {
      if (!runway.busy) {
        return runway
      }
    }
    
    return null
  }

}
