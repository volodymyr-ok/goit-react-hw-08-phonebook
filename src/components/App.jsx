import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Contacts from 'pages/Contacts/Contacts';
import RegisterView from 'pages/RegisterView/RegisterView';
import Login from 'pages/LoginView/LoginView';
import { lazy, Suspense } from 'react';
// const Contacts = lazy(() => import('pages/Contacts/Contacts'));
// const Register = lazy(() => import('pages/Register/Register'));
// const Login = lazy(() => import('pages/Login/Login'));
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {/* <Navigation ></Navigation> */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Contacts />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
