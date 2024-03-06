import { FetchContractsListResponse } from "@/@Types/contract.interface";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: null | FetchContractsListResponse;
}

const initialState: InitialStateProps = {
  data: null,
};

const contractsSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    setContracts: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setContracts } = contractsSlice.actions;

export default contractsSlice;
