import { Task } from './Task';
import { SingleTask } from './types/task';

interface Props {
    tasks: SingleTask[];
    finishTask: (taskId: string) => void;
}

const Tasks = ({tasks, finishTask}: Props) => {
  return (
    <ul>
       {tasks.map(task => <Task key={task.id} task={task} finishTask={finishTask} />)}
    </ul>
  );
}

export { Tasks };
