import { createSlice } from "@reduxjs/toolkit";
import { AlbumState } from "../../types/Models";
import { Status } from "../../types/Status";
import { fetchAlbums } from "./asyncAction";

const initialState: AlbumState = {
    albumsData: [],
    userName: '',
    status: Status.LOADING,
}

export const albumSlice = createSlice({
    name: "album",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAlbums.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchAlbums.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.albumsData = action.payload.data;
            state.userName = action.payload.userName;
        })
        builder.addCase(fetchAlbums.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.albumsData = [];
        })
    },
});

export default albumSlice.reducer;