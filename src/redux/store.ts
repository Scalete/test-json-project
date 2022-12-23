import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import albumSlice from './albums/slice';
import postSlice from './posts/slice';
import userSlice from './users/slice';

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: { 
    user: userSlice,
    post: postSlice,
    album: albumSlice,
  },
});
