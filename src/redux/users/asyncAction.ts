import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/Models";
import { BASE_URL } from "../../utils/Contants";

export const fetchUsers = createAsyncThunk<User[]>(
    'user/fetchUsersStatus',
    async () => {

        const { data } = await axios.get<User[]>(`${BASE_URL}/users`);

        return data;
    }
);