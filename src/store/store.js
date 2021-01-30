import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['MyPokemonList']
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const combine = combineReducers({...reducers})
const persistedReducer = persistReducer(persistConfig, combine)

const stores = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
export default stores;