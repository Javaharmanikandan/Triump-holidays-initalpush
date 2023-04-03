import { configureStore, createSlice } from "@reduxjs/toolkit"


const InditialStateofLoader = {value: {LoaderState: false}};

const LoaderSlice = createSlice({
    name:"Loader",
    initialState: InditialStateofLoader,
    reducers:{
        Trigger:(state, action) =>{
            state.value = action.payload
        }
    }
})

export const {Trigger} = LoaderSlice.actions;

export const store = configureStore({
    reducer:{
        Loader: LoaderSlice.reducer
    }
})