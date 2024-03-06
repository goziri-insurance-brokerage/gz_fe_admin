import { FetchHcpListResponse } from "@/@Types/hcp.interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: null | FetchHcpListResponse;
}

const initialState: InitialStateProps = {
  data: null,
};

const hcpSlice = createSlice({
  name: "hcp",
  initialState,
  reducers: {
    setHcp: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setHcp } = hcpSlice.actions;

export default hcpSlice;
