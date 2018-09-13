import { fromJS } from 'immutable';
import createSagaMiddleware, { END } from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

export default (initialState = {}, history) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  if (history) {
    middleware.push(routerMiddleware(history));
  }

  const enhancers = [];

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => {
    store.dispatch(END);
  };

  const historyRes = history ? syncHistoryWithStore(history, store, {
    selectLocationState (state) {
      return state.get('router').toObject();
    }
  }) : void 0;

  return {store, history: historyRes};
}
