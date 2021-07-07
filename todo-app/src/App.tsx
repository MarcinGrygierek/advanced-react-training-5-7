import React, {Suspense} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import store from './store';

const About = React.lazy(() => import('./About'));
const Dynamic = React.lazy(() => import('./Dynamic'));
const TaskManager = React.lazy(() => import('./TaskManager'));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <NavLink activeClassName='active' activeStyle={{backgroundColor: 'red'}} to='/tasks'>Tasks</NavLink>
            </li>
            <li>
              <Link to='/tasks/10'>Task 10</Link>
            </li>

          </ul>
        </nav>
        <Suspense fallback={<h1>Trwa ładowanie</h1>}>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/tasks' />} />
            <Route path='/about' component={About} />
            <Route exact path='/tasks' component={TaskManager} />
            <Route path='/tasks/:id' component={Dynamic} />
          </Switch>
        </Suspense>
       
      </Router>
    </Provider>
  );
}

export { App };
