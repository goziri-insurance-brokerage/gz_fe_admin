import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authApi from "@/apis/auth.api";
import contractsSlice from "./slices/contracts.slice";
import contractApi from "@/apis/contract.api";
import adminApi from "@/apis/admin.api";
import adminsSlice from "./slices/admins.slice";
import profileApi from "@/apis/profile.api";
import profileSlice from "./slices/profile.slice";
import hcpApi from "@/apis/hcp.api";
import hcpSlice from "./slices/hcp.slice";
import hmoApi from "@/apis/hmo.api";
import hmoSlice from "./slices/hmo.slice";
import usersApi from "@/apis/users.api";
import usersSlice from "./slices/users.slice";
import orgApi from "@/apis/org.api";
import orgSlice from "./slices/org.slice";

const reducer = combineReducers({
  [adminsSlice.name]: adminsSlice.reducer,
  [hcpSlice.name]: hcpSlice.reducer,
  [hmoSlice.name]: hmoSlice.reducer,
  [orgSlice.name]: orgSlice.reducer,
  [contractsSlice.name]: contractsSlice.reducer,
  [profileSlice.name]: profileSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [adminApi.reducerPath]: adminApi.reducer,
  [hcpApi.reducerPath]: hcpApi.reducer,
  [hmoApi.reducerPath]: hmoApi.reducer,
  [orgApi.reducerPath]: orgApi.reducer,
  [contractApi.reducerPath]: contractApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

const middleware: any = (getDefaultMiddleware: any) => [
  ...getDefaultMiddleware(),
  adminApi.middleware,
  authApi.middleware,
  hcpApi.middleware,
  hmoApi.middleware,
  orgApi.middleware,
  contractApi.middleware,
  profileApi.middleware,
  usersApi.middleware,
];

const store = configureStore({
  reducer,
  middleware,
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
