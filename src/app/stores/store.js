import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import simulationApp from 'redux/reducers/index.js'

const store = createStore(
  simulationApp,
  applyMiddleware(thunk),
  applyMiddleware(logger),
);

export default store
