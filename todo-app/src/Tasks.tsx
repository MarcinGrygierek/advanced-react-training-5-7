import { Task } from './Task';
import { SingleTask } from './types/task';

interface Props {
    tasks: SingleTask[];
    finishTask: (taskId: string) => void;
    reopenTask: (taskId: string) => void;
}

const Tasks = ({tasks, finishTask, reopenTask}: Props) => {
  return (
    <ul>
       {tasks.map(task => <Task key={task.id} task={task} finishTask={finishTask} reopenTask={reopenTask} />)}
    </ul>
  );
}

export { Tasks };
