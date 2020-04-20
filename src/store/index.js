import { createStore } from 'redux';
import reducers from '../reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

export default store;
