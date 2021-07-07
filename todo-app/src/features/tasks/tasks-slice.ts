import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { SingleTask, TaskRes, TaskToCreate } from "../../types/task";

interface TasksState {
    items: SingleTask[]
}

interface CloseTask {
    payload: string
}

interface OpenTask {
    payload: string
}

const mapTask = (res: TaskRes): SingleTask => {
    return {
        ...res,
        createdAt: new Date(res.createdAt),
        finishedAt: res.finishedAt ? new Date(res.finishedAt) : null
    };
}

export const getTasks = createAsyncThunk<SingleTask[]>(
    'tasks/getTasks',
    async () => {
        const res = await fetch('http://localhost:3001/tasks');
        const data: TaskRes[] = await res.json();
        return data.map(mapTask);
    }
)

export const createTask = createAsyncThunk<SingleTask, TaskToCreate>(
    'tasks/createTask',
    async (task: TaskToCreate) => {
        const {name, description} = task;
        const newTask: SingleTask = {
            name,
            description,
            createdAt: new Date(),
            finishedAt: null,
            id: uuidv4()
        }
        const res = await fetch('http://localhost:3001/tasks', {
            method: 'POST',
            body: JSON.stringify(newTask),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data: TaskRes = await res.json();
        return mapTask(data);
    }
)

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: []
    },
    reducers: {
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
    },
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.items = action.payload as any;
        })
        builder.addCase(createTask.fulfilled, (state, action) => {
            state.items = [...state.items, action.payload] as any;
            console.log(action);
        })
    }
})

export const { closeTask, openTask } = tasksSlice.actions;