import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const myNameSlice = createSlice({
    name: 'myName',
    initialState: {
        offset: 1,
    },
    reducers: {
        updateOffset: (state, action) => {
            state.offset = action.payload
        },
        incrementOffset: (state, action) => {
            state.offset++;
        }
    },
   
})

export const { updateOffset, incrementOffset } = myNameSlice.actions;