import { User } from 'types';
import { createSlice } from '@reduxjs/toolkit';
import { typeFn } from './const';
import { fetchEditUser, fetchLogin, fetchLogout, fetchRegister, fetchUser } from './auth.actions';
import { isTokensEmpty } from 'utils/localStorageHelper';

type AuthState = {
  user: User | null;
  userError: boolean;
  userLoading: boolean;

  editUserError: boolean;
  editUserLoading: boolean;

  loginLoading: boolean;
  loginError: boolean;

  logoutLoading: boolean;
  logoutError: boolean;

  registerLoading: boolean;
  registerError: boolean;
};

export const initialState: AuthState = {
  user: null,
  userError: false,
  userLoading: !isTokensEmpty(),

  editUserError: false,
  editUserLoading: false,

  loginLoading: false,
  loginError: false,

  logoutLoading: false,
  logoutError: false,

  registerLoading: false,
  registerError: false
};

const authSlice = createSlice({
  name: typeFn(),
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userError = false;
        state.userLoading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.userError = false;
        state.userLoading = true;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.userError = true;
        state.userLoading = false;
      })

      .addCase(fetchEditUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.editUserError = false;
        state.editUserLoading = false;
      })
      .addCase(fetchEditUser.pending, (state) => {
        state.editUserError = false;
        state.editUserLoading = true;
      })
      .addCase(fetchEditUser.rejected, (state) => {
        state.editUserError = true;
        state.editUserLoading = false;
      })

      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loginError = false;
        state.loginLoading = false;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.loginError = false;
        state.loginLoading = true;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.loginError = true;
        state.loginLoading = false;
      })

      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = null;
        state.logoutError = false;
        state.logoutLoading = false;
      })
      .addCase(fetchLogout.pending, (state) => {
        state.logoutError = false;
        state.logoutLoading = true;
      })
      .addCase(fetchLogout.rejected, (state) => {
        state.logoutError = true;
        state.logoutLoading = false;
      })

      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.registerLoading = false;
        state.registerError = false;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.registerLoading = true;
        state.registerError = false;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.registerLoading = false;
        state.registerError = true;
      });
  }
});

export const authReducer = authSlice.reducer;
