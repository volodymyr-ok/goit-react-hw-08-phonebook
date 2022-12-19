import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavBar } from 'components/NavBar/NavBar';
import { StlyledHeader } from './Navigation.styled';
import { Suspense } from 'react';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <StlyledHeader>{isLoggedIn ? <UserMenu /> : <NavBar />}</StlyledHeader>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
