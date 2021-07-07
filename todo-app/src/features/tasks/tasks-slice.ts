import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { SingleTask, TaskRes, TaskStatusReq, TaskToCreate } from "../../types/task";

const mapTask = (res: TaskRes): SingleTask => {
    return {
        ...res,
        createdAt: new Date(res.createdAt),
        finishedAt: res.finishedAt ? new Date(res.finishedAt) : null
    };
}

const callApi = async<T, D = {}>(path: string, method: 'POST' | 'GET' | 'PATCH', payload?: D): Promise<T> => {
    const res = await fetch(`http://localhost:3001/${path}`, {
        method,
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data: T = await res.json();
    return data;
}


export const getTasks = createAsyncThunk<SingleTask[]>(
    'tasks/getTasks',
    async () => {
        const data = await callApi<TaskRes[]>('tasks', 'GET');
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
        const data = await callApi<TaskRes, SingleTask>('tasks', 'POST', newTask);
        return mapTask(data);
    }
)

export const closeTask = createAsyncThunk<SingleTask, string>(
    'tasks/closeTask',
    async (taskId: string) => {
        const taskPatch: TaskStatusReq = {
            finishedAt: new Date()
        }
        const data = await callApi<TaskRes, TaskStatusReq>(`tasks/${taskId}`, 'PATCH', taskPatch);
        return mapTask(data);
    }
)

export const openTask = createAsyncThunk<SingleTask, string>(
    'tasks/openTask',
    async (taskId: string) => {
        const taskPatch: TaskStatusReq = {
            finishedAt: null
        }
        const data = await callApi<TaskRes, TaskStatusReq>(`tasks/${taskId}`, 'PATCH', taskPatch);
        return mapTask(data);
    }
)

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.items = action.payload as any;
        })
        builder.addCase(createTask.fulfilled, (state, action) => {
            state.items = [...state.items, action.payload] as any;
        })
        builder.addCase(closeTask.fulfilled, (state, action) => {
            state.items = (state.items as any).map((item: SingleTask) => {
                if(item.id === action.payload.id) return action.payload;
                return item;
            })
        })
        builder.addCase(openTask.fulfilled, (state, action) => {
            state.items = (state.items as any).map((item: SingleTask) => {
                if(item.id === action.payload.id) return action.payload;
                return item;
            })
        })
    }
})