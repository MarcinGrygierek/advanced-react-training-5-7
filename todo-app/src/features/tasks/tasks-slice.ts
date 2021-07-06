import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { SingleTask } from "../../types/task";

interface TasksState {
    items: SingleTask[]
}

interface AddNewTask {
    payload: {
        name: string;
        description: string
    }
}

interface CloseTask {
    payload: string
}

interface OpenTask {
    payload: string
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: []
    },
    reducers: {
        createTask: (state: TasksState, action: AddNewTask) => {
            const newTask: SingleTask = {
                name: action.payload.name,
                description: action.payload.description,
                createdAt: new Date(),
                finishedAt: null,
                id: uuidv4()
            }
            state.items.push(newTask);
        },
        closeTask: (state: TasksState, action: CloseTask) => {
            state.items = state.items.map(el => {
               if(el.id === action.payload) return {
                   ...el,
                   finishedAt: new Date()
               }
               return el;
            })
        },
        openTask: (state: TasksState, action: OpenTask) => {
            state.items = state.items.map(el => {
               if(el.id === action.payload) return {
                   ...el,
                   finishedAt: null
               }
               return el;
            })
        }
    }
})

export const { createTask, closeTask, openTask } = tasksSlice.actions;