import { combineReducers } from 'redux';

import world from 'redux/reducers/world';
import airplanes from 'redux/reducers/airplanes';
import airports from 'redux/reducers/airports';
import runways from 'redux/reducers/runways';

export default combineReducers({
  airplanes,
  airports,
  runways,
  world,
});
