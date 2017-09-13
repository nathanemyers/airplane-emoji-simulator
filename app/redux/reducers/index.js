import { routerReducer}  from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import airplanes from 'redux/reducers/notifications'

export default combineReducers({
  airplanes,
});
