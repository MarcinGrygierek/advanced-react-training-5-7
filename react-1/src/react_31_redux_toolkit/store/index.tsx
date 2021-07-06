import { configureStore } from "@reduxjs/toolkit";
import { myNameSlice } from "../features/my-name/my-name-slice";

const store = configureStore({
    reducer: {
        myName: myNameSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store;