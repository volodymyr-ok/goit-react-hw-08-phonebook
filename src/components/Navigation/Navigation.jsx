import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
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
      </header>

      <Outlet />
    </div>
  );
};

export default Navigation;
