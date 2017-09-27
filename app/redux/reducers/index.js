import { combineReducers } from 'redux';

import world from 'redux/reducers/world';
import airplanes from 'redux/reducers/airplanes';
import airports from 'redux/reducers/airports';

export default combineReducers({
  world,
  airplanes,
  airports,
});
