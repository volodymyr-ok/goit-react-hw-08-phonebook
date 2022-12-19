import { NavLink } from 'react-router-dom';
import { StyledUL } from './NavBar.styled';

export const NavBar = () => {
  return (
    <StyledUL>
      <li>
        <NavLink to={'register'}>Register</NavLink>
      </li>
      <li>
        <NavLink to={'/'}>Login</NavLink>
      </li>
    </StyledUL>
  );
};
