var assert = require('assert');
import Runway from "../app/runway.js"

describe('Runways', function() {
  it('start empty', function() {
    var runway = new Runway()
    assert.equal(runway.busy, false);
  });

  it('can become busy', function() {
    var runway = new Runway()
    runway.busy = true
    assert.equal(runway.busy, true);
  });
  
  it('can become free', function() {
    var runway = new Runway()
    runway.busy = false
    assert.equal(runway.busy, false);
  });
});
