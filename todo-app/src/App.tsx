import { AppContainer } from './AppContainer';
import { Form } from './Form';
import { useTasks } from './hooks/useTasks';
import { Tasks } from './Tasks';

const App = () => {
  const {tasks, reopenTask, finishTask, addNewTask} = useTasks();
  return (
        <AppContainer>
          <Form addNewTask={addNewTask} />
          <Tasks tasks={tasks} finishTask={finishTask} reopenTask={reopenTask} />
        </AppContainer>
  );
}

export { App };
