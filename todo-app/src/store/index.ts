import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "../features/tasks/tasks-slice";

const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store