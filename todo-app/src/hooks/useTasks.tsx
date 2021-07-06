import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { SingleTask } from "../types/task";

export function useTasks() {
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

    return {
        tasks, 
        finishTask, 
        reopenTask,
        addNewTask
    }
  
}