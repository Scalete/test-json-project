import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post, PostsWithUsername, User } from "../../types/Models";
import { BASE_URL } from "../../utils/Contants";

export const fetchPosts = createAsyncThunk<PostsWithUsername, {id: number}>(
    'user/fetchPostsStatus',
    async ({id}) => {

        const { data } = await axios.get<Post[]>(`${BASE_URL}/posts?userId=${id}`);
        const user = await axios.get<User[]>(`${BASE_URL}/users?id=${id}`);

        const result = {
            data,
            userName: user.data.pop()?.username as string,
        }

        return result;
    }
);