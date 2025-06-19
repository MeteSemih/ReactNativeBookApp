import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { act } from "react";



export const fetchBooks = createAsyncThunk("books/fetchBooks",async () => {
    try {
        const response = await axios.get("https://stephen-king-api.onrender.com/api/books");
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
})

const bookSlice = createSlice({
    name:"books",
    initialState: {
        list:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=> {
        builder
        .addCase(fetchBooks.pending,(state)=> {
            state.loading = true;
            state.error = null;
        })
        builder
        .addCase(fetchBooks.fulfilled,(state,action)=> {
            state.loading = false;
            state.list = action.payload.data;
        })
        builder
        .addCase(fetchBooks.rejected,(state,action)=> {
            state.loading = false;
            state.error = action.error.message;
            state.list = [];
        })
        
    }
    
})
export default bookSlice.reducer;
