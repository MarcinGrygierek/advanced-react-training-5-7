import { useState } from 'react';
import uuid from 'uuid';
import { Form } from './Form';
import { Tasks } from './Tasks';
import { Task } from './types/task';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(
    [
      {
      id: uuid.v4(),
      name: 'Do groceries',
      createdAt: new Date()
    }, {
      id: uuid.v4(),
      name: 'Mop the floor',
      createdAt: new Date()
    }
  ]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-8">
          <Form />
          <Tasks />
        </div>
      </div>
  </div>
  );
}

export { App };
