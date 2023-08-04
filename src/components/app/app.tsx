import React, { ReactElement, useEffect } from 'react';
import { AppHeader } from './app-header';
import { AppMain, ModalProvider } from 'ui';
import { useAppDispatch } from 'store';
import { Route, Routes, useLocation, useNavigationType } from 'react-router-dom';
import {
  LoginPage,
  ConstructorPage,
  UnknownPageError,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  IngredientPage,
  ProfilePage,
  ProfileOrders,
  OrdersFeedPage,
  OrderPage,
  ProfileForm
} from 'pages';
import { AppRoutes } from 'const';
import { ProtectedRoute } from './protected-route';
import { fetchUser } from 'store/auth';
import { isTokensEmpty } from 'utils/localStorageHelper';
import { fetchIngredients } from 'store/ingredients';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const navType = useNavigationType();

  const background = location?.state?.background;

  const backgroundOnPush = navType === 'PUSH' ? location?.state?.backgroundOnPush : null;


  useEffect(() => {
    if (!isTokensEmpty()) {
      dispatch(fetchUser());
    }
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <ModalProvider hasBackground={Boolean(background ?? backgroundOnPush)}>
      <AppHeader />
      <AppMain>
        <Routes location={background ?? backgroundOnPush ?? location}>
          <Route path={AppRoutes.Constructor} element={<ConstructorPage />} />

          <Route path={AppRoutes.Feed} element={<OrdersFeedPage />} />

          <Route path={`${AppRoutes.Feed}/:id`} element={<OrderPage />} />

          <Route path={`${AppRoutes.Ingredient}/:id`} element={<IngredientPage />} />

          <Route element={<ProtectedRoute onlyForAuth />}>
            <Route path={`${AppRoutes.Profile}/orders/:id`} element={<OrderPage />} />
          </Route>

          <Route element={<ProtectedRoute onlyForAuth />}>
            <Route path={AppRoutes.Profile} element={<ProfilePage />}>
              <Route path='' element={<ProfileForm />}/>
              <Route path='orders' element={<ProfileOrders />}/>
            </Route>
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
