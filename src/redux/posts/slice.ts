import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/Status";
import { PostState } from "../../types/Models";
import { fetchPosts } from "./asyncAction";

const initialState: PostState = {
    postsData: [],
    userName: '',
    status: Status.LOADING,
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.postsData = action.payload.data;
            state.userName = action.payload.userName;
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.postsData = [];
        })
    },
});

export default postSlice.reducer;