import { combineReducers } from 'redux';

import world from './world';
import airplanes from './airplanes';

export default combineReducers({
  world,
  airplanes,
});
