import { FetchUsersListResponse } from "@/@Types/users.interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: null | FetchUsersListResponse;
}

const initialState: InitialStateProps = {
  data: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice;
