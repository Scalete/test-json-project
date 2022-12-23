import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/Status";
import { UserState } from "../../types/Models";
import { fetchUsers } from "./asyncAction";

const initialState: UserState = {
    usersData: [],
    status: Status.LOADING,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = Status.LOADING;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = Status.SUCCES;
            state.usersData = action.payload;
        })
        builder.addCase(fetchUsers.rejected, (state) => {
            state.status = Status.ERROR;
            alert(Status.ERROR);
            state.usersData = [];
        })
    },
});

export default userSlice.reducer;