import { Provider } from 'react-redux';
import { AppContainer } from './AppContainer';
import { Form } from './Form';
import { useTasks } from './hooks/useTasks';
import store from './store';
import { Tasks } from './Tasks';

const TaskManager = () => {
  const {tasks, reopenTask, finishTask, addNewTask} = useTasks();
  return (
        <AppContainer>
          <Form addNewTask={addNewTask} />
          <Tasks tasks={tasks} finishTask={finishTask} reopenTask={reopenTask} />
        </AppContainer>
  );
}

const App = () => {
  return (
    <Provider store={store}>
       <TaskManager />
    </Provider>
  );
}

export { App };
