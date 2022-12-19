import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const RegisterView = lazy(() => import('pages/RegisterView/RegisterView'));
const LoginView = lazy(() => import('pages/LoginView/LoginView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginView />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} />}
          />
        </Route>
        <Route
          path="*"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginView />} />
          }
        />
      </Routes>
    </>
  );
};
