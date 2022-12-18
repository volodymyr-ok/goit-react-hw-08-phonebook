import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Contacts from 'pages/Contacts/Contacts';
import RegisterView from 'pages/RegisterView/RegisterView';
import Login from 'pages/LoginView/LoginView';
// import { lazy } from 'react';
// const Contacts = lazy(() => import('pages/Contacts/Contacts'));
// const Register = lazy(() => import('pages/Register/Register'));
// const Login = lazy(() => import('pages/Login/Login'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
