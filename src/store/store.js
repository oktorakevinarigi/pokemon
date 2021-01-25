import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const stores = createStore(
  combineReducers({
    ...reducers
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export default stores;