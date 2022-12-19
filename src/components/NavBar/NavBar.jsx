import { NavLink } from 'react-router-dom';
import { StyledUL } from './NavBar.styled';
import { MdLogin } from 'react-icons/md';

export const NavBar = () => {
  return (
    <StyledUL>
      <li>
        <NavLink to={'register'}>
          Register
          <span>
            <MdLogin />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to={'/'}>
          Login{' '}
          <span>
            <MdLogin />
          </span>
        </NavLink>
      </li>
    </StyledUL>
  );
};
