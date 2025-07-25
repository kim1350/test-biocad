// eslint-disable-next-line import/no-unresolved
import { getItem, setItem } from "@/src/services/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, Login } from "../types/auth";

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkIsSigned: (state) => {
      const token = getItem("token");
      state.isAuthenticated = !!token;
    },
    login: (state, action: PayloadAction<Login>) => {
      setItem("token", action.payload.accessToken);
      setItem("refreshToken", action.payload.refreshToken);
      setItem(
        "token_deadline",
        `${
          action.payload.expires_timestamp * 1000 -
          action.payload.expires_in * 0.1 * 1000
        }`
      );
      if (!state.isAuthenticated) state.isAuthenticated = true;
    },
    logout: (state) => {
      setItem("token", "");
      setItem("token_deadline", "");
      state.isAuthenticated = false;
    },
  },
});

export const { checkIsSigned, login, logout } = authSlice.actions;

export default authSlice.reducer;
