import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from './Form';
import { Tasks } from './Tasks';
import { SingleTask } from './types/task';

const App = () => {
  const [tasks, setTasks] = useState<SingleTask[]>(
      [
        {
          id: uuidv4(),
          name: 'Do groceries',
          createdAt: new Date(),
          finishedAt: null
        }, {
          id: uuidv4(),
          name: 'Mop the floor',
          createdAt: new Date(),
          finishedAt: null
      }
    ]
  );

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-8">
          <Form />
          <Tasks tasks={tasks} finishTask={finishTask} reopenTask={reopenTask} />
        </div>
      </div>
  </div>
  );
}

export { App };
