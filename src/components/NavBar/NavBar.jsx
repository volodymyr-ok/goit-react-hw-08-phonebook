import { NavLink } from 'react-router-dom';
import { StyledUL } from './NavBar.styled';
import { FaRegAddressBook, FaRegUser } from 'react-icons/fa';
import { Logo } from 'components/Logo/Logo';

export const NavBar = () => {
  return (
    <StyledUL>
      <li>
        <Logo />
      </li>

      <li>
        <NavLink to={'/'}>
          Login
          <FaRegUser />
        </NavLink>
      </li>

      <li>
        <NavLink to={'register'}>
          Register
          <FaRegAddressBook />
        </NavLink>
      </li>
    </StyledUL>
  );
};
