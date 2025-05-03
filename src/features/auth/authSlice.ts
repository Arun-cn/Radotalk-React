import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, User } from "../../types/auth";
import { authAPI } from "./authAPI";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk<LoginResponse, LoginPayload>(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await authAPI(email, password);
      return response;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Cast to string
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
