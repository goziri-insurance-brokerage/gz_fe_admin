import { FetchHmoListResponse } from "@/@Types/hmo.interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: null | FetchHmoListResponse;
}

const initialState: InitialStateProps = {
  data: null,
};

const hmoSlice = createSlice({
  name: "hmo",
  initialState,
  reducers: {
    setHmo: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setHmo } = hmoSlice.actions;

export default hmoSlice;
