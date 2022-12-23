import { RootState } from "../store";

export const useUsers = (state: RootState) => state.user;