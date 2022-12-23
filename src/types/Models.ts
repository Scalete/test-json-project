import { Dispatch, SetStateAction } from "react";
import { Status } from "./Status";

export interface User {
    id: number;
    username: string;
}

export interface UserState {
    usersData: User[];
    status: Status;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface PostState {
    postsData: Post[];
    userName: string;
    status: Status;
}

export interface PostsWithUsername {
    data: Post[];
    userName: string;
}

export interface Album {
    id: number;
    userId: number;
    title: string;
}

export interface AlbumState {
    albumsData: Album[];
    userName: string;
    status: Status;
}

export interface AlbumWithUsername {
    data: Album[];
    userName: string;
}

export interface IModal {
    aciveModal?: boolean;
    setActiveModal: Dispatch<SetStateAction<boolean>>;
    userId: number;
}

export interface IUserProps {
    onOpenUserAlbum: (id: number) => void;
}