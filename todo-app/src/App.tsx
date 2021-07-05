import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  const addNewTask = (name: string) => {
    setTasks(prevTasks => [...prevTasks, {
      name,
      createdAt: new Date(),
      finishedAt: null,
      id: uuidv4()
    }])
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-8">
          <Form addNewTask={addNewTask} />
          <Tasks tasks={tasks} finishTask={finishTask} reopenTask={reopenTask} />
        </div>
      </div>
  </div>
  );
}

export { App };
