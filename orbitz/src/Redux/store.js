import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from 'redux';
  import thunk from 'redux-thunk';
  import {   auth_reducer } from '../Redux/AuthReducer/reducer';
 
  
  const rootReducer = combineReducers({
    Auth: auth_reducer,
   
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );