import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useHistory} from 'react-router-dom';
import { AppContainer } from './AppContainer';
import { Form } from './Form';
import { useTasks } from './hooks/useTasks';
import store from './store';
import { Tasks } from './Tasks';
import { SingleTask } from './types/task';

const TaskManager = () => {
  const {tasks, reopenTask, finishTask, addNewTask} = useTasks();
  const history = useHistory();

  useEffect(() => {
    const closed = tasks.filter((task: SingleTask) => task.finishedAt);
    history.block(() => {
     if(closed.length < 5) {
       console.log('TODO: display modal with warning');
       return false;
     }
    })
  }, [tasks])

  return (
        <AppContainer>
          <Form addNewTask={addNewTask} />
          <Tasks tasks={tasks} finishTask={finishTask} reopenTask={reopenTask} />
        </AppContainer>
  );
}

const About = () => {
  return <h1>This is my super task manager.</h1>
}

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
              <Link to='/tasks'>Tasks</Link>
            </li>

          </ul>
        </nav>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/tasks' />} />
          <Route path='/about' component={About} />
          <Route path='/tasks'>
            <TaskManager />
          </Route>
        </Switch>
       
      </Router>
    </Provider>
  );
}

export { App };
