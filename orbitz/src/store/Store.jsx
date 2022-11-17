import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from 'redux';
  import thunk from "redux-thunk"
  import { auth_reducer } from './Auth/reducer';
import { hotelReducer } from './Hotel/reducer';

  
  const rootReducer = combineReducers({
    Auth: auth_reducer,
    hotel: hotelReducer,
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );