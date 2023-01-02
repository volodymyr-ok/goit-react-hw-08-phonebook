import { NavLink } from 'react-router-dom';
import { StyledUL } from './NavBar.styled';
import { MdLogin } from 'react-icons/md';
import { MdOutlineAssignment } from 'react-icons/md';

export const NavBar = () => {
  return (
    <StyledUL>
      <li>
        <NavLink to={'/'}>
          Login
          <MdLogin />
        </NavLink>
      </li>
      <li>
        <NavLink to={'register'}>
          Register
          <MdOutlineAssignment />
        </NavLink>
      </li>
    </StyledUL>
  );
};
