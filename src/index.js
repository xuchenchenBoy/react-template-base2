import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import createStore from './store/createStore'
import registerServiceWorker from './registerServiceWorker';
import sagas from './sagas'
import './styles/main.less'
import RouterWrapper from './components/Layouts/RouterWrapper'
import asyncComponent from './components/AsyncComponent'

const { store, history } = createStore(window.__INITIAL_STATE__ || {}, browserHistory);
store.runSaga(sagas);

const Page404 = asyncComponent(() => import('./pages/Page404'))
const Home = asyncComponent(() => import('./pages/Home'), RouterWrapper)

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <Route path="home" component={Home} />
        <Route path="*" component={Page404} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();


