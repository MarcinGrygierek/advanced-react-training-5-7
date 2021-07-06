import { useDispatch, useSelector } from "react-redux";
import { closeTask, createTask, openTask } from "../features/tasks/tasks-slice";
import { RootState } from "../store";

export function useTasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.items);

    const finishTask = (taskId: string) => {
      dispatch(closeTask(taskId));
    }
  
    
    const reopenTask = (taskId: string) => {
      dispatch(openTask(taskId));
    }
  
    const addNewTask = (name: string, description: string) => {
       dispatch(createTask({ name, description }));
    }

    return {
        tasks, 
        finishTask,
        reopenTask,
        addNewTask, 
    }
  
}