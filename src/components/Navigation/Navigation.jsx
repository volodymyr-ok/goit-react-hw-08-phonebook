import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/authOperations';
import { StyledBtn } from 'utils/theme';

const Navigation = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to={'contacts'}>Contacts</NavLink>
          </li>
          <li>
            <NavLink to={'register'}>Register</NavLink>
          </li>
          <li>
            <NavLink to={'login'}>Login</NavLink>
          </li>
        </ul>
        <StyledBtn type="button" onClick={handleLogOut}>
          LogOut
        </StyledBtn>
      </header>

      <Outlet />
    </div>
  );
};

export default Navigation;
