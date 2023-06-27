import { RootState } from 'store/store';
import { User } from 'types';

export function userSelector(state: RootState): User | null {
  return state.auth.user;
}
export function isUserLoadingSelector(state: RootState): boolean {
  return state.auth.userLoading;
}
export function hasUserErrorSelector(state: RootState): boolean {
  return state.auth.userError;
}

export function isEditUserLoadingSelector(state: RootState): boolean {
  return state.auth.editUserLoading;
}
export function hasEditUserErrorSelector(state: RootState): boolean {
  return state.auth.editUserError;
}

export function isLoginLoadingSelector(state: RootState): boolean {
  return state.auth.loginLoading;
}
export function hasLoginErrorSelector(state: RootState): boolean {
  return state.auth.loginError;
}

export function isRegisterLoadingSelector(state: RootState): boolean {
  return state.auth.registerLoading;
}
export function hasRegisterErrorSelector(state: RootState): boolean {
  return state.auth.registerError;
}
