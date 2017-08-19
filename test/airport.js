import { should, assert } from 'chai'
import Airport from "../app/airport.js"

describe('Airports', function() {
  it('can add runways', function() {
    let airport = new Airport()
    assert.equal(airport.runway_count, 1);
    airport.add_runway('test')
    assert.equal(airport.runway_count, 2);
  });

  it('can find open runways', function() {
    let airport = new Airport()
    let runway = airport.get_open_runway()
    assert.notEqual(runway, null);
  });

  it('return null if no open runway', function() {
  });

});
