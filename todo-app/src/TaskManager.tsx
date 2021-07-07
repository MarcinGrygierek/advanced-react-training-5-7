import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppContainer } from "./AppContainer";
import { Form } from "./Form";
import { useTasks } from "./hooks/useTasks";
import { Tasks } from "./Tasks";
import { SingleTask } from "./types/task";

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

  export default TaskManager;