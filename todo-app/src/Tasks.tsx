import { Task } from './Task';
import { SingleTask } from './types/task';

interface Props {
    tasks: SingleTask[]
}

const Tasks = ({tasks}: Props) => {
  return (
    <ul>
       {tasks.map(task => <Task key={task.id} task={task} />)}
    </ul>
  );
}

export { Tasks };
