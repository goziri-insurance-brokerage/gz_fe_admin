import { FetchOrgListResponse } from "@/@Types/org.interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: null | FetchOrgListResponse;
}

const initialState: InitialStateProps = {
  data: null,
};

const orgSlice = createSlice({
  name: "org",
  initialState,
  reducers: {
    setOrg: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setOrg } = orgSlice.actions;

export default orgSlice;
