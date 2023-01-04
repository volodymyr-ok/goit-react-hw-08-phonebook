import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavBar } from 'components/NavBar/NavBar';
import { StlyledHeader } from './Navigation.styled';
import { Suspense } from 'react';
import { LogoutModal } from 'components/LogoutModal/LogoutModal';
import { UserMenuModal } from 'components/UserMenuModal/UserMenuModal';
// import { EditContactFrom } from 'components/EditContactForm/EditContactForm';
import closeMenu from 'utils/additionalMenuClosing';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn && (
        <>
          <LogoutModal />
          <UserMenuModal />
          {/* <EditContactFrom /> */}
        </>
      )}
      <StlyledHeader onClick={closeMenu}>
        {isLoggedIn ? <UserMenu /> : <NavBar />}
      </StlyledHeader>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
