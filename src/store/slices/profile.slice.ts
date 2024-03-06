import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  data: null | AdminProfile;
}

const initialState: InitialStateProps = {
  data: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice;
