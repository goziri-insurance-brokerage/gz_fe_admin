import { FetchAdminsListResponse } from "@/@Types/admin.interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: null | FetchAdminsListResponse;
}

const initialState: InitialStateProps = {
  data: null,
};

const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    setAdmins: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setAdmins } = adminsSlice.actions;

export default adminsSlice;
