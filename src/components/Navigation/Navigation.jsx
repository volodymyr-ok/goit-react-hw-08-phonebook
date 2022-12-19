import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/authOperations';
import { selectIsLoggedIn, selectUserName } from 'redux/selectors';
import { StyledBtn } from 'utils/theme';

const Navigation = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <div>
      <header>
        {isLoggedIn ? (
          <>
            <NavLink to={'/'}>
              <p>Contacts</p>
            </NavLink>
            <p>{userName}</p>
            <StyledBtn type="button" onClick={handleLogOut}>
              LogOut
            </StyledBtn>
          </>
        ) : (
          <ul>
            <li>
              <NavLink to={'register'}>Register</NavLink>
            </li>
            <li>
              <NavLink to={'login'}>Login</NavLink>
            </li>
          </ul>
        )}
      </header>

      <Outlet />
    </div>
  );
};

export default Navigation;
