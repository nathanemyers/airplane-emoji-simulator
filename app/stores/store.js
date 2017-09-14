import { createStore } from 'redux';
import simulationApp from '../redux/reducers/index.js'

const store = createStore(simulationApp);

export default store
