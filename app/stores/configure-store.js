import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../redux/reducers/index';

const logger = createLogger({
  predicate: () => process.env.NODE_ENV == 'development',
  logger: console
});

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
