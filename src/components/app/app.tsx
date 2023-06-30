import React, { ReactElement, useEffect } from 'react';
import { AppHeader } from './app-header';
import { AppMain, ModalProvider } from 'ui';
import { useAppDispatch } from 'store';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  LoginPage,
  ConstructorPage,
  UnknownPageError,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  IngredientPage,
  ProfilePage,
} from 'pages';
import { AppRoutes } from 'const';
import { ProtectedRoute } from './protected-route';
import { fetchUser } from 'store/auth';
import { isTokensEmpty } from 'utils/localStorageHelper';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const background = location?.state?.background;

  useEffect(() => {
    if (!isTokensEmpty()) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <ModalProvider hasBackground={Boolean(background)}>
      <AppHeader />
      <AppMain>
        <Routes location={background ?? location}>
          <Route path={AppRoutes.Constructor} element={<ConstructorPage />} />
          <Route path={`${AppRoutes.Ingredient}/:id`} element={<IngredientPage />} />
          <Route element={<ProtectedRoute onlyForAuth />}>
            <Route path={AppRoutes.Profile} element={<ProfilePage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={AppRoutes.Login} element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={AppRoutes.Register} element={<RegisterPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={AppRoutes.ForgotPassword} element={<ForgotPasswordPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path={AppRoutes.ResetPassword} element={<ResetPasswordPage />} />
          </Route>
          <Route path='*' element={<UnknownPageError />} />
        </Routes>
      </AppMain>
    </ModalProvider>
  );
};
