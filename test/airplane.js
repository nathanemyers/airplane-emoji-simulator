var assert = require('assert');
import { Airplane, PLANE_STATUS } from "../app/engine/airplane.js"

describe('Airplanes', function() {
  it('should burn fuel', function() {
    let plane = new Airplane(10, 20, PLANE_STATUS.FLIGHT)
    plane.tick()
    assert.equal(plane.fuel, 9);
  });

  it('should crash when out of fuel', function() {
    let plane = new Airplane(2, 20, PLANE_STATUS.FLIGHT)
    plane.tick()
    assert.equal(plane.status, PLANE_STATUS.FLIGHT);
    plane.tick()
    assert.equal(plane.status, PLANE_STATUS.CRASH);
  });

  it('only burns fuel while airbourne', function() {
    let flight_plane = new Airplane(10, 20, PLANE_STATUS.FLIGHT)
    let taxi_plane = new Airplane(10, 20, PLANE_STATUS.TAXI)
    let takeoff_plane = new Airplane(10, 20, PLANE_STATUS.TAKEOFF)
    let landing_plane = new Airplane(10, 20, PLANE_STATUS.LANDING)
    let crash_plane = new Airplane(10, 20, PLANE_STATUS.CRASH)

    flight_plane.tick()
    taxi_plane.tick()
    takeoff_plane.tick()
    landing_plane.tick()
    crash_plane.tick()

    assert.equal(flight_plane.fuel, 9);
    assert.equal(taxi_plane.fuel, 10);
    assert.equal(takeoff_plane.fuel, 10);
    assert.equal(landing_plane.fuel, 10);
    assert.equal(crash_plane.fuel, 10);
  });

  it('should start topped off', function() {
    let plane = new Airplane(10)
    assert.equal(plane.fuel, 10);
  });

  it('travels distance while in flight', function() {
    let plane = new Airplane(10, 20, PLANE_STATUS.FLIGHT)
    plane.tick()
    assert.equal(plane.eta, 19);
  });

  it('does not go negative distance', function() {
    let plane = new Airplane(10, 1, PLANE_STATUS.FLIGHT)
    plane.tick()
    assert.equal(plane.eta, 0);
    plane.tick()
    assert.equal(plane.eta, 0);
  });

  it('can takeoff', function() {
    let plane = new Airplane(10)
    assert.equal(plane.status, PLANE_STATUS.TAXI);
    plane.takeoff()
    assert.equal(plane.status, PLANE_STATUS.TAKEOFF);
    plane.tick()
    assert.equal(plane.status, PLANE_STATUS.FLIGHT);
  });
});
