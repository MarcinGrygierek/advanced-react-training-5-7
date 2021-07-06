import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContainer } from './AppContainer';
import { Form } from './Form';
import { Tasks } from './Tasks';
import { SingleTask } from './types/task';

const App = () => {
  const [tasks, setTasks] = useState<SingleTask[]>([]);

  const finishTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if(task.id === taskId) return {
        ...task,
        finishedAt: new Date()
      };
      return task;
    }))
  }

  
  const reopenTask = (taskId: string) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if(task.id === taskId) return {
        ...task,
        finishedAt: null
      };
      return task;
    }))
  }

  const addNewTask = (name: string, description: string) => {
    setTasks(prevTasks => [...prevTasks, {
      name,
      description,
      createdAt: new Date(),
      finishedAt: null,
      id: uuidv4()
    }])
  }

  return (
        <AppContainer>
          <Form addNewTask={addNewTask} />
          <Tasks tasks={tasks} finishTask={finishTask} reopenTask={reopenTask} />
        </AppContainer>
  );
}

export { App };
