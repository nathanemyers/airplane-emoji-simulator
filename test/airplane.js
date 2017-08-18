var assert = require('assert');
import { Airplane, PLANE_STATUS } from "../app/airplane.js"

describe('Airplane Functions', function() {
  describe('Fuel Stuff', function() {
    it('should burn fuel', function() {
      let plane = new Airplane(10)
      plane.tick()
      assert.equal(plane.fuel, 9);
    });

    it('should crash when out of fuel', function() {
    });

    it('should start topped off', function() {
    });

  });
});
