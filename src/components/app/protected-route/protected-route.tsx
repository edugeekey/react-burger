import React, { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppRoutes } from 'const';
import { ChildrenProps } from 'types';
import { useAppSelector } from 'store';
import { isUserLoadingSelector, userSelector } from 'store/auth';
import { Loader } from 'ui';

type ProtectedRouteProps = ChildrenProps & {
  onlyForAuth?: boolean;
};

export const ProtectedRoute = ({ onlyForAuth, children }: ProtectedRouteProps): ReactNode => {
  const isLoading = useAppSelector(isUserLoadingSelector);
  const user = useAppSelector(userSelector);
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  if (onlyForAuth && !user) {
    return (
      <Navigate
        to={AppRoutes.Login}
        state={{ from: location }}
        replace />
    );
  }

  if (!onlyForAuth && user) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Navigate to={from} />;
  }

  return children ? children : <Outlet />;
};
