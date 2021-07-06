import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMyIP = createAsyncThunk<string>(
    'myName/getMyIP',
    async () => {
        const res = await fetch('https://api.ipify.org/?format=json');
        const data = await res.json();
        return data.ip;
    }
)

export const myNameSlice = createSlice({
    name: 'myName',
    initialState: {
        offset: 1,
        ip: '',
        loading: false
    },
    reducers: {
        updateOffset: (state, action) => {
            state.offset = action.payload
        },
        incrementOffset: (state, action) => {
            state.offset++;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMyIP.pending,  (state, action) => {
            state.loading = true;
        });
        builder.addCase(getMyIP.fulfilled,  (state, action) => {
            state.ip = action.payload;
            state.loading = false;
        })
    }
})

export const { updateOffset, incrementOffset } = myNameSlice.actions;