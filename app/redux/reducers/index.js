import { combineReducers } from 'redux';

import world from './world';
import airplanes from './airplanes';
import airports from './airports';

export default combineReducers({
  world,
  airplanes,
  airports,
});
