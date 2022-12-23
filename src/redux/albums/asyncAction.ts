import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Album, AlbumWithUsername, User } from "../../types/Models";
import { BASE_URL } from "../../utils/Contants";

export const fetchAlbums = createAsyncThunk<AlbumWithUsername, {userId?: number}>(
    'user/fetchPostsStatus',
    async ({userId}) => {

        const { data } = await axios.get<Album[]>(`${BASE_URL}/albums?userId=${userId}`);
        const user = await axios.get<User[]>(`${BASE_URL}/users?id=${userId}`);

        const result = {
            data,
            userName: user.data.pop()?.username as string,
        }

        return result;
    }
);